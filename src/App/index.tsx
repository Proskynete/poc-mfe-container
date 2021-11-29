import React, { Suspense } from "react";
import { Nav } from "react-bootstrap";
import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "../routes";

const App = () => {
  return (
    <BrowserRouter>
      <Nav activeKey="/home">
        <Nav.Item>
          <Link to="/">Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/drivers">Drivers</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/growth">Growth</Link>
        </Nav.Item>
      </Nav>

      <Suspense fallback="Cargando...">
        <Router />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
