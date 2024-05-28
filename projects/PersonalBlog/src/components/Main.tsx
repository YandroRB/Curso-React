import { usePostList } from '../customs/usePostList';
import Post from './Post';

function Main() {
  const { postList } = usePostList();
  return (
    <main className=" pt-10 px-3" id="main">
      <ul className=" space-y-5  md:gap-6 md:space-y-0 md:grid  md:grid-cols-2">
        {postList.map((post, index) => (
          <li className="border-t-2  border-slate-500" key={index}>
            <Post post={post} index={index} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Main;
