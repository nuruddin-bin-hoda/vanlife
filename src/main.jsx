import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import GlobalStyle from "./components/styles/Global.styles";

import "../server";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);
