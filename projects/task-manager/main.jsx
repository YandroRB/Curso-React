import {createRoot} from "react-dom/client"
import App from "./src/App";
import './tailwind.css'
import { TasksProvider } from "./src/context/tasks";
import { BrowserRouter } from "react-router-dom";

const root=createRoot(document.getElementById("app"));
root.render(
  <BrowserRouter>
    <TasksProvider>
    <App/>
    </TasksProvider>
  </BrowserRouter>
)