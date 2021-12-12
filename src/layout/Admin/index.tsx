import React, { FC } from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth.hook";
import { navigation } from "../../routes/navigation";

const AdminLayout: FC = ({ children }) => {
  const { userInfo } = useAuth();

  return (
    <div>
      <Row>
        <Col md={12}>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>D-Una</Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  Bienvenido: <span>{userInfo?.name}</span>
                </Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row>

      <Container fluid>
        <Row>
          <Col md={2}>
            <Nav className="flex-column">
              {navigation.map((nav) => {
                return (
                  <div key={nav.section} style={{ marginTop: "20px" }}>
                    <div style={{ marginTop: "10px", marginBottom: "20px" }}>
                      {nav.section}
                    </div>

                    {nav.items.map((item) => {
                      return (
                        item.rolesAllowed.find(
                          (roleAllowed) => roleAllowed === userInfo?.role
                        ) &&
                        item.show && (
                          <p style={{ margin: "0" }} key={item.title}>
                            <Link to={item.to}>
                              {item.icon}
                              {item.title}
                            </Link>
                          </p>
                        )
                      );
                    })}
                  </div>
                );
              })}
            </Nav>
          </Col>

          <Col md={10}>
            <Row>
              <Col>{children}</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export { AdminLayout };
