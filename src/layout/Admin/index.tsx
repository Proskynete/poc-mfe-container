import React, { FC } from "react";
import { Nav, Navbar } from "react-bootstrap";

const AdminLayout: FC = ({ children }) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Navbar.Brand href="#home">D-Una</Navbar.Brand>
          </Navbar>
        </div>
      </div>

      <div className="row">
        <div className="col-2">
          <Nav className="flex-column">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/drivers">Drivers</Nav.Link>
            <Nav.Link href="/growth">Growth</Nav.Link>
          </Nav>
        </div>

        <div className="col-10">{children}</div>
      </div>
    </div>
  );
};

export { AdminLayout };
