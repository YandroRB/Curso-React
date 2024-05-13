import { TODO_FILTERS } from './utils/const';

export interface Todo {
  id: string;
  title: string;
  complete: boolean;
}

export type typeTodoID = Pick<Todo, 'id'>;
export type typeTodoTile = Pick<Todo, 'title'>;
export type typeTodoComplete = Pick<Todo, 'complete'>;
export type ListOfTodo = Todo[];
export type FilterValue = (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS];
