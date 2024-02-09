import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import UserNavigation from './UserNavigation';

function Navigation({topics}) {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">NC News!</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Articles</Nav.Link>
            <NavDropdown title="Topics" id="collapsible-nav-dropdown">
              {
                topics.map((topic,index)=> { 
                  return <NavDropdown.Item key={index} href={`/articles?topic=${topic.slug}`}>
                    {topic.slug}
                  </NavDropdown.Item> })
              }
            </NavDropdown>
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