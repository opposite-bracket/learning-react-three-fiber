import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Learning RTF</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <NavDropdown title="Exercises" id="collasible-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/examples/simple-box">Simple Box</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/examples/axes-helper">Axes Helper</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar;