import { Todo as TypeTodo, typeTodoID, type ListOfTodo } from '../types';
import { Todo } from './Todo';

interface Props {
  todos: ListOfTodo;
  handleRemove: ({ id }: typeTodoID) => void;
  handleComplete: ({ id, complete }: Pick<TypeTodo, 'id' | 'complete'>) => void;
}

function Todos({ todos, handleRemove, handleComplete }: Props) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={todo.complete ? 'completed' : ''}>
          <Todo
            {...todo}
            handleRemove={() => {
              handleRemove({ id: todo.id });
            }}
            handleComplete={handleComplete}
          />
        </li>
      ))}
    </ul>
  );
}

export default Todos;
