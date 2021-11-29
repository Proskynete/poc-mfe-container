import React, { Suspense } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "../routes";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/drivers">Drivers</Link>
        <Link to="/growth">Growth</Link>
      </nav>

      <Suspense fallback="Cargando...">
        <Router />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
