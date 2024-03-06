import{BrowserRouter,Routes,Route,Navigate} from'react-router-dom'

import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Contacto from './pages/Contacto'
import Acerca from './pages/Acerca'
import NotFound from './pages/NotFound'
import Productos from './pages/Productos'
import ProductoDetalle from './pages/ProductoDetalle'
import Servicios from './pages/Servicios'

function App() {
  return(
    <>
    <Header/>
      <BrowserRouter >
        <Navigation/>
        <Routes >
          <Route path='/' element={<Home/>} />
          <Route path='/acerca' element={<Acerca/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/about' element={<Navigate to={'/acerca'}/>}/>
          <Route path='/productos' element={<Productos/>}/>
          <Route path='/productos/:id' element={<ProductoDetalle/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/servicios' element={<Servicios/>}>
            <Route index element={<h1>Inicio del servicios de la pagina sumamente aleatoria</h1>} />
            <Route path='garantia' element={<p>No nos hacemos responsable por lo que te pase por leer esta pagina porque entraste bajo tu propio riesgo, acepta las consecuencias</p>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
