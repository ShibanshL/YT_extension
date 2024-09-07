import React from "react";
import ReactDOM from "react-dom/client";

import "./content.css";
import ContentApp from "./ContentApp";

const root = document.createElement("div");
root.id = "crx-root";
document.body.appendChild(root);

console.log('LOADED BITCH')

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ContentApp />
  </React.StrictMode>
);
