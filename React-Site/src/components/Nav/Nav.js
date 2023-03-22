import React from "react";
import {useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import navpdf from '../Nav/UmarMekkaoui-Resume2023.pdf'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Nav.css'

const Navigation = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);
    return (
<Navbar className={offset ? "addNavBG" : "removeNavBG"} sticky="top" collapseOnSelect expand="lg" bg="none" variant="dark">
      <Container>
        <Navbar.Brand href="/">Umar Mekkaoui</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav data-bs-theme="dark" className="me-auto">
            <Nav.Link href={navpdf} download>Resume</Nav.Link>
            <NavDropdown title="Specialties" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/ux">UX Design</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Graphic Design</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Game Development</NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown title="Projects" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Fur'Ever Homes - UX Case Study</NavDropdown.Item>
              <NavDropdown.Item href="/ux/guntzburger">
                Guntz Burger - UX Case Study
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/umar-mekkaoui/">
                LinkedIn
            </Nav.Link>
            <Nav.Link href="#memes">
              Behance
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Navigation