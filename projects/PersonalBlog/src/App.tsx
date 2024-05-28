import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Article from './components/Article';

import Main from './components/Main';

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
            </>
          }
        />
        <Route path="/post/:id/:title" element={<Article />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
