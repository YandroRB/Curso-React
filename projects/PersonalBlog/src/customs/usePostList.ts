import { useEffect, useState } from 'react';
import { ListOfPost } from '../types';
import { fetchData } from '../utils';
interface usePostListResult {
  postList: ListOfPost;
  fetchData: () => Promise<ListOfPost>;
}
export function usePostList(): usePostListResult {
  const [postList, setPostList] = useState<ListOfPost>([]);
  useEffect(() => {
    async function getPostList(): Promise<void> {
      try {
        const listPost = await fetchData();
        setPostList(listPost);
      } catch (error) {
        console.error(error);
      }
    }
    void getPostList();
  }, []);
  return { postList, fetchData };
}
