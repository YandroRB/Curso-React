import { useState } from 'react';
import Todos from './components/Todos';
import {
  FilterValue,
  ListOfTodo,
  Todo,
  typeTodoID,
  typeTodoTile,
} from './types';
import { TODO_FILTERS } from './utils/const';
import Footer from './components/Footer';
import Header from './components/Header';

const mockTodo = [
  {
    id: '142',
    title: 'Crear Proyecto Todo TypeScript',
    complete: false,
  },
  {
    id: '111',
    title: 'Seguir el linter que hemos configurado',
    complete: true,
  },
  {
    id: '454',
    title: 'Seguir practicando TypeScript',
    complete: true,
  },
];

function App(): JSX.Element {
  const [todos, setTodos] = useState<ListOfTodo>(mockTodo);
  const [filterSelected, setFilterSeleted] = useState<FilterValue>(
    TODO_FILTERS.ALL
  );
  const activeCount = todos.filter((todo) => !todo.complete).length;
  const completeCount = todos.length - activeCount;
  const filteredTodo = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.complete;
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.complete;
    return todo;
  });
  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSeleted(filter);
  };
  const handleRemove = ({ id }: typeTodoID) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const handleComplete = ({
    id,
    complete,
  }: Pick<Todo, 'id' | 'complete'>): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const handleRemoveAllComplete = (): void => {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  };
  const handleAddTodo = ({ title }: typeTodoTile): void => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      complete: false,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };
  return (
    <div className="todoapp">
      <Header onAddTodo={handleAddTodo} />
      <Todos
        todos={filteredTodo}
        handleRemove={handleRemove}
        handleComplete={handleComplete}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completeCount}
        filterSelected={filterSelected}
        onClearCompleted={handleRemoveAllComplete}
        handleFilterChange={handleFilterChange}
      />
    </div>
  );
}

export default App;
