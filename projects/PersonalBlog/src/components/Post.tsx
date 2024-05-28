import { Link } from 'react-router-dom';
import { Post as PostType } from '../types';

interface Props {
  post: PostType;
  index: number;
}
function Post({ post, index }: Props) {
  return (
    <article className="flex flex-col">
      <Link
        className="  hover:text-sky-500 "
        to={`/post/${index}/${post.title}`}
      >
        <h3 className=" font-semibold text-xl ">{post.title}</h3>
      </Link>
      <time className="text-xs font-semibold my-3">{post.date}</time>
      <p className="mb-3">{post.summary}</p>
      <Link
        className=" w-[100px] hover:bg-sky-500 hover:font-semibold border border-sky-200 px-4 py-2 bg-sky-300 rounded-md text-gray-800"
        to={`/post/${index}/${post.title}`}
      >
        Leer mas
      </Link>
    </article>
  );
}

export default Post;
