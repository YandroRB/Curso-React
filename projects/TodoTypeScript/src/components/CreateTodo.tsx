import { useState } from 'react';
import { typeTodoTile } from '../types';

interface Props {
  saveTodo: ({ title }: typeTodoTile) => void;
}
function CreateTodo({ saveTodo }: Props) {
  const [inputValue, setInputValue] = useState('');
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    saveTodo({ title: inputValue });
    setInputValue('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="new-todo"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        placeholder="¿Qué quieres hacer?"
        autoFocus
      />
    </form>
  );
}

export default CreateTodo;
