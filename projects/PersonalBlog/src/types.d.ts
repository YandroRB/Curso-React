export interface Post {
  title: string;
  author: string;
  date: string;
  tags: string[];
  summary: string;
  file: string;
}
export type ListOfPost = Post[];
