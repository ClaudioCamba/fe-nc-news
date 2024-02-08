import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import UserNavigation from './UserNavigation';

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">NC News!</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Articles</Nav.Link>
            {/* <NavDropdown title="Topics" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Topics</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Topics</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Topics</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link href="/">
              <UserNavigation />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;