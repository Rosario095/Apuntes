import React from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Navbars2 extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand>APUNTES</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#react">React</Nav.Link>
                <Nav.Link href="#local">Window LocalStorage</Nav.Link>
                <Nav.Link href="#protol">Protocolo HTTP</Nav.Link> 
                <Nav.Link href="#estado">Códigos de Estado</Nav.Link>
                <Nav.Link href="#axios">Axios</Nav.Link> 
                <Nav.Link href="#laravel_api">Laravel API</Nav.Link>
                <Nav.Link href="#laravel">Laravel API Restful</Nav.Link>
                <Nav.Link href="#sanctum">Laravel Santum API RESTful</Nav.Link>               
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}