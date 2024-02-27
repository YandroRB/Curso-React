import { Link } from "../Link";

const i18n={
  es:{
    title:'Inicio',
    description:`React Router es una biblioteca de enrutamiento diseñada para la gestión
    de la navegación en aplicaciones web desarrolladas con React. Permite
    crear rutas declarativas en la interfaz de usuario, lo que facilita la
    creación de aplicaciones de página única (SPA). Con React Router, puedes
    definir diferentes componentes que se renderizarán según la URL actual,
    lo que facilita la creación de experiencias de usuario dinámicas y
    fluidas. Además, proporciona herramientas para la navegación
    programática y la gestión del historial del navegador, lo que mejora la
    experiencia de usuario al interactuar con la aplicación sin necesidad de
    recargar la página. En resumen, React Router es esencial para crear
    aplicaciones React que requieran una navegación eficiente y organizada.`,
    button:'Sobre Nosotros'
  },
  en:{
    title:'Home',
    description:'React Router is a routing library designed for managing navigation in web applications developed with React. It allows the creation of declarative routes in the user interface, making it easier to build Single Page Applications (SPAs). With React Router, you can define different components that will be rendered based on the current URL, facilitating the creation of dynamic and smooth user experiences. Additionally, it provides tools for programmatic navigation and browser history management, enhancing the user experience when interacting with the application without the need to reload the page. In summary, React Router is essential for creating React applications that require efficient and organized navigation.',
    button:'About us'
  }
}
const useI18n=(lang)=>{
  return i18n[lang]||i18n.en;
}

export default function HomePage({routeParams}) {
  const i18n=useI18n(routeParams.lang ?? 'es');
    return (
      <>
        <h1>{i18n.title}</h1>
        <p>
          {i18n.description}
        </p>
        <Link  to={"/about"}  >{i18n.button} </Link>
      </>
    );
  }