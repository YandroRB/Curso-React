import {createRoot} from 'react-dom/client';
import { MovieApp } from './src/app';

const root=createRoot(document.getElementById('app'));

root.render(
  <MovieApp />
)
