import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.js"
import { BrowserRouter } from "react-router-dom";

const root = document.getElementById('root');

createRoot(root).render(
    <StrictMode>
        <BrowserRouter><App/></BrowserRouter>
    </StrictMode>
);
