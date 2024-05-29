import { ListOfPost } from './types';

export async function fetchData(): Promise<ListOfPost> {
  const response = await fetch('/posts.json');
  if (!response.ok) throw new Error('Error while fetching');
  const data = (await response.json()) as ListOfPost;
  return data;
}
