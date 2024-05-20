import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import UserNavigation from './UserNavigation';
import { getTopics } from '../utils/api-requests.js';
import { useState, useEffect } from 'react';

function Navigation() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics()
    .then((data)=>{
      data.topics.unshift({
        "slug": "all articles",
        "description": "All Articles!"
    })
      setTopics(data.topics);
    }).catch((error)=>{
      console.log(error);
    })
  },[]);

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
                  return <NavDropdown.Item key={index} href={topic.slug === 'all articles'?
                  `/articles`:`/articles?topic=${topic.slug}`}>
                    {topic.slug}
                  </NavDropdown.Item> })
              }
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/account">
              <UserNavigation />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;