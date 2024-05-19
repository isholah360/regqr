import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Form from "./component/form/form.jsx";
import Home from "./component/Home/home.jsx";
import Generate from "./component/Home/gener.jsx";
import Gui from "./component/gui/gui.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route path="/" element={<App />} > 
              <Route path="/" element={<Home />} /> 
              <Route path="/register" element={<Form />} />
              <Route path="/qr/:data" element={<Generate />} />
              <Route path="/gui" element={<Gui/>} />
          </Route>
        </Routes>
    </Router>

  </React.StrictMode>
);
