import {createRoot} from "react-dom/client";
import {App} from "./App.jsx";
import {FiltersProvider} from "./context/filters.jsx";

const root = createRoot(document.getElementById('app'));
root.render(
    <FiltersProvider>
        <App />
    </FiltersProvider>
)