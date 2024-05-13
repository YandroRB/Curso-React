import { FilterValue } from '../types';
import Filters from './Filters';

interface Props {
  activeCount: number;
  completedCount: number;
  handleFilterChange: (filter: FilterValue) => void;
  filterSelected: FilterValue;
  onClearCompleted: () => void;
}
function Footer({
  activeCount = 0,
  completedCount,
  handleFilterChange,
  filterSelected,
  onClearCompleted,
}: Props) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> Tareas pendientes
      </span>
      <Filters
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
      />
      {completedCount > 0 && (
        <button className="clear-completed" onClick={onClearCompleted}>
          Borrar Completadas
        </button>
      )}
    </footer>
  );
}

export default Footer;
