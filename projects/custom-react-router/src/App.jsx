import { Component, Suspense, lazy } from "react";
import HomePage from "./pages/HomePage";
import { Router } from "./Router";
import { Route } from "./Route";

const AboutPage= lazy(()=> import("./pages/AboutPage"));
const SearchPage=lazy(()=> import("./pages/SearchPage"));

const routes =[
  {
    path:'/search/:query',
    Component:SearchPage
  },
  {
    path:'/:lang/about',
    Component:AboutPage
  },
  {
    path:'/:lang',
    Component:HomePage
  }
]


function App() {

  return (
    <>
      <main>
        <Suspense fallback={<div>Cargando.....</div>}>
        <Router routes={routes}>
          <Route path={'/'} Component={HomePage}/>
          <Route path={'/about'} Component={AboutPage}/>
        </Router>
        </Suspense>
      </main>
    </>
  );
}

export default App;
