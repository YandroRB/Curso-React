import { Link } from 'react-router-dom';

export interface Post {
  title: string;
  author: string;
  date: string;
  tags: string[];
  summary: string;
  file: string;
}
export type ListOfPost = Post[];
interface Props {
  postList: ListOfPost;
}
function Main({ postList }: Props) {
  return (
    <main id="main">
      <ul>
        {postList.map((post, index) => (
          <li key={index}>
            <article>
              <Link to={`/post/${index}/${post.title}`}>
                <h3>{post.title}</h3>
              </Link>
              <time>{post.date}</time>
              <p>{post.summary}</p>
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Main;
