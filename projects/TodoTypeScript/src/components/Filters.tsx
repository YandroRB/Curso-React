import { FilterValue } from '../types';
import { FILTERS_BUTTONS } from '../utils/const';
interface Props {
  filterSelected: FilterValue;
  onFilterChange: (filter: FilterValue) => void;
}

function Filters({ filterSelected, onFilterChange }: Props) {
  return (
    <ul className="filters">
      {Object.entries(FILTERS_BUTTONS).map(([key, { href, button }]) => {
        const isSelected = key === filterSelected;
        const className = isSelected ? 'selected' : '';
        return (
          <li key={key}>
            <a
              href={href}
              className={className}
              onClick={(event) => {
                event.preventDefault();
                onFilterChange(key as FilterValue);
              }}
            >
              {button}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Filters;
