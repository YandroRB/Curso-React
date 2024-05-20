import { IconChevronDoubleDown } from '../Icons';

function Header() {
  return (
    <div className=" h-screen w-full bg-mobileBackground  bg-center bg-cover  ">
      <header className="px-5 flex flex-col  h-full w-full  bg-slate-800 bg-opacity-70 backdrop-blur-sm">
        <h1 className="my-auto font-extrabold text-2xl mx-auto text-white md:text-4xl text-center ">
          ENTERATE DE LAS ULTIMAS NOVEDADES Y DESCUBRE TRUCOS SOBRE EL
          DESARROLLO WEB
        </h1>
        <a href="" className=" mx-auto mb-12">
          <IconChevronDoubleDown className=" text-3xl  text-sky-300 hover:text-sky-500 animate-bounce" />
        </a>
      </header>
    </div>
  );
}

export default Header;
