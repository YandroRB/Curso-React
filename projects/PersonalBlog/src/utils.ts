import { ListOfPost } from './components/Main';

export async function fetchData(): Promise<ListOfPost> {
  try {
    const response = await fetch('src/posts.json');
    if (!response.ok) throw new Error('Error while fetching');
    const data = (await response.json()) as ListOfPost;
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
  return [];
}
