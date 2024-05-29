import { MdiFacebook, MdiGithub, MdiLinkedin, RiTwitterXFill } from '../Icons';
import FormContact from './FormContact';
import './Post.css';

function Footer() {
  return (
    <div className=" bg-sky-900 px-4 pt-4 space-y-3 md:space-y-0 md:grid md:grid-cols-footer">
      <div className="flex justify-center  md:col-span-1 text-white gap-x-2">
        <a href="https://github.com/YandroRB" target="_blank" rel="noreferrer">
          <MdiGithub className=" size-10" />
        </a>
        <a href="">
          <MdiFacebook className=" size-10" />
        </a>
        <a href="">
          <RiTwitterXFill className=" size-10" />
        </a>
        <a href="">
          <MdiLinkedin className=" size-10" />
        </a>
      </div>
      <div className="md:col-start-2 md:row-start-1">
        <FormContact />
      </div>
      <div className=" text-gray-400 md:col-span-2 text-center">
        <small>Copyright © 2024 YandroRB</small>
      </div>
    </div>
  );
}

export default Footer;
