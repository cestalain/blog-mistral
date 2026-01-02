import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AppNavbar() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          BLOG-MISTRAL
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              ACCUEIL
            </Nav.Link>
            <Nav.Link as={Link} to="/aquarelle">
              AQUARELLE
            </Nav.Link>
            <Nav.Link as={Link} to="/petanque">
              PETANQUE
            </Nav.Link>
            <Nav.Link as={Link} to="/auvergne">
              AUVERGNE
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
