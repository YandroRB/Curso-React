import { Link } from 'react-router-dom';
import { FlatColorIconsHome } from '../Icons';
import './HeaderArticle.css';

function HeaderArticle() {
  return (
    <div className="h-[50px] relative flex justify-center ">
      <Link
        to={'/#main'}
        className="neon-hover shadow-blue-500  absolute -bottom-1/2 bg-slate-900  size-14 rounded-full flex justify-center  items-center"
      >
        <FlatColorIconsHome className=" text-4xl" />
      </Link>
    </div>
  );
}

export default HeaderArticle;
