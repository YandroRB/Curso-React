export const TODO_FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed',
} as const;

export const FILTERS_BUTTONS = {
  [TODO_FILTERS.ALL]: {
    button: 'Todos',
    href: `/?filters=${TODO_FILTERS.ALL}`,
  },
  [TODO_FILTERS.ACTIVE]: {
    button: 'Activos',
    href: `/?filters=${TODO_FILTERS.ACTIVE}`,
  },
  [TODO_FILTERS.COMPLETED]: {
    button: 'Completos',
    href: `/?filters=${TODO_FILTERS.COMPLETED}`,
  },
};
