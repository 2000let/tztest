import React from 'react'
import ReactDOM from 'react-dom/client'
import AppComponent from "./app";
import './styles/index.scss'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppComponent />
  </React.StrictMode>
);
