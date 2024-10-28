import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cliente } from "./paginas/cliente";
import "./static/css/main.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Cliente />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
