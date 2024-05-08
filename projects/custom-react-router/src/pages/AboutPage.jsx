import { Link } from "../Link";


const i18n={
  es:{
    title:"Sobre nosotros",
    button:"Volver al inicio",
    description:`La ficticia empresa "TechNav Solutions" es reconocida como la mente
    maestra detrás de React Router, una destacada biblioteca de enrutamiento
    para aplicaciones web desarrolladas en React. Fundada en 2015 por
    innovadores entusiastas de la tecnología, TechNav se ha destacado por su
    compromiso con la simplicidad y eficiencia en la gestión de la
    navegación en el ecosistema React. Su equipo de desarrollo ha trabajado
    incansablemente para proporcionar actualizaciones y mejoras continuas,
    consolidando a TechNav Solutions como líder en soluciones de
    enrutamiento que potencian experiencias de usuario fluidas y dinámicas
    en todo el mundo.`
  },
  en:{
    title:'About us',
    button:'Back to home',
    description:'The fictional company "TechNav Solutions" is recognized as the mastermind behind React Router, a prominent routing library for web applications developed in React. Founded in 2015 by technology enthusiasts and innovators, TechNav has stood out for its commitment to simplicity and efficiency in managing navigation within the React ecosystem. Its development team has worked tirelessly to provide continuous updates and improvements, establishing TechNav Solutions as a leader in routing solutions that empower seamless and dynamic user experiences worldwide.'
  }
}
const useI18n=(lang)=>{
  return i18n[lang]||i18n.en
}

export default function AboutPage({routeParams}) {
    const i18n=useI18n(routeParams.lang ?? 'es');
    return (
      <>
        <h1>{i18n.title}</h1>
        <img src="../src/assets/Logo.jpg" alt="TechNav Solutions Logo"/>
        <p>
          {i18n.description}
        </p>
        <Link to={"/"} >{i18n.button}</Link>
      </>
    );
  }