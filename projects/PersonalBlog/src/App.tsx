import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main, { ListOfPost } from './components/Main';
import Article from './components/Article';
import { useEffect, useState } from 'react';
import { fetchData } from './utils';

function App() {
  const [postList, setPostList] = useState<ListOfPost>([]);
  useEffect(() => {
    fetchData()
      .then((response) => setPostList(response))
      .catch((error) => console.log(error));
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main postList={postList} />
            </>
          }
        />
        <Route
          path="/post/:id/:title"
          element={<Article postList={postList} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
