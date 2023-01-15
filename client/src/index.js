//index.js 
//short snippet cmd imr
import React from "react";
//short snippet cmd imrd
import ReactDOM from 'react-dom/client';
//import App component
import App from "./App";
 
//render app component into element called "root" within our index.html
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App />
);

