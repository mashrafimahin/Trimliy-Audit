import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import "./styles/index.css";
import App from "./App.jsx";
import ScrollManager from "./handler/ScrollManager.jsx";
import Store from "./app/store/Store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <ScrollManager />
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
