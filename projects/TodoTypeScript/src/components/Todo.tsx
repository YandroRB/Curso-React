import { Todo as TodoType } from '../types';

interface Props extends TodoType {
  handleRemove: () => void;
  handleComplete: ({ id, complete }: Pick<TodoType, 'id' | 'complete'>) => void;
}

export const Todo: React.FC<Props> = ({
  id,
  title,
  complete,
  handleRemove,
  handleComplete,
}) => {
  const onToggleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleComplete({ id, complete: event.target.checked });
  };
  return (
    <div className="view">
      <input
        type="checkbox"
        className="toggle"
        checked={complete}
        onChange={onToggleCheck}
      />
      <label>{title}</label>
      <button className="destroy" onClick={handleRemove}></button>
    </div>
  );
};
