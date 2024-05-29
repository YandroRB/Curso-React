import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Article from './components/Article';

import Main from './components/Main';
import NotFound from './components/NotFound';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main />
              <Footer />
            </>
          }
        />
        <Route path="/post/:id/:title" element={<Article />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to={'/not-found'} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
