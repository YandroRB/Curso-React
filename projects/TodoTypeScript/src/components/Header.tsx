import { typeTodoTile } from '../types';
import CreateTodo from './CreateTodo';

interface Props {
  onAddTodo: ({ title }: typeTodoTile) => void;
}
function Header({ onAddTodo }: Props) {
  return (
    <header className="header">
      <h1>
        Todo
        <img
          style={{ width: '60px', height: 'auto' }}
          src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
          alt="TypeScript logo"
        />
      </h1>
      <CreateTodo saveTodo={onAddTodo} />
    </header>
  );
}

export default Header;
