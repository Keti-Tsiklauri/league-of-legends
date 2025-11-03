import { Link } from "react-router-dom";
import {
  Navbar as BSNavbar,
  Nav,
  Container,
  NavDropdown,
} from "react-bootstrap";

export default function Navbar() {
  return (
    <BSNavbar bg="dark" variant="dark" expand="md" sticky="top">
      <Container>
        <BSNavbar.Brand as={Link} to="/">
          League of Legends
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Main
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/page1">
              Page 1
            </Nav.Link>
            <Nav.Link as={Link} to="/page2">
              Page 2
            </Nav.Link>
            <Nav.Link as={Link} to="/page3">
              Page 3
            </Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}
