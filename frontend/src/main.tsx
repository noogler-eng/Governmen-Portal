import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Provider from "./components/Provider.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider>
    <App />
  </Provider>
);
