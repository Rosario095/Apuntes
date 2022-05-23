import React from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Navbars extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand>APUNTES</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">

              <NavDropdown title="React" id="basic-nav-dropdown">
                  <NavDropdown title="Fundamentos y origen" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#fundamentos">Fundamentos y origen</NavDropdown.Item>
                    <NavDropdown.Item href="#estrc">Estructura clásica</NavDropdown.Item>
                    <NavDropdown.Item href="#encapsu">Encapsulación</NavDropdown.Item>
                    <NavDropdown.Item href="#atomic">Atomic Design</NavDropdown.Item>
                    <NavDropdown.Item href="based">Components-based architecture</NavDropdown.Item>
                    <NavDropdown.Item href="identifiers">JavaScript: Identifiers</NavDropdown.Item>
                    <NavDropdown.Item href="anatomia">Anatomía de React</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Crear una aplicación en React" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#creacion">Crear una aplicación en React</NavDropdown.Item>
                    <NavDropdown.Item href="#depend">Depedendencias</NavDropdown.Item>
                    <NavDropdown.Item href="#bundling">Empaquetado (Bundling)</NavDropdown.Item>
                    <NavDropdown.Item href="#empaq">Empaquetado con React</NavDropdown.Item>
                    <NavDropdown.Item href="estruc">Estructura de Carpetas</NavDropdown.Item>
                    <NavDropdown.Item href="linting">Linting</NavDropdown.Item>
                    <NavDropdown.Item href="commint">Etapa de commint</NavDropdown.Item>
                    <NavDropdown.Item href="format">Format</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Renderizado de componentes en el DOM" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#renderizado">Renderizado de componentes en el DOM</NavDropdown.Item>
                    <NavDropdown.Item href="component">Componentes de clase o funcionales</NavDropdown.Item>
                    <NavDropdown.Item href="jsx">JSX</NavDropdown.Item>
                    <NavDropdown.Item href="expresiones">Expresiones y fragmentos en JSX</NavDropdown.Item>
                    <NavDropdown.Item href="estilo">Estilizado básico en JSX</NavDropdown.Item>
                    <NavDropdown.Item href="dinamico">Renderizado dinámico</NavDropdown.Item>
                    <NavDropdown.Item href="iterativo">Renderizado iterativo y claves</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Comunicación y estado de los componentes" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#estado">Comunicación y estado de los componentes</NavDropdown.Item>
                    <NavDropdown.Item href="#props">Props</NavDropdown.Item>
                    <NavDropdown.Item href="#destr">Functional vs Classy (destructuring)</NavDropdown.Item>
                    <NavDropdown.Item href="#pty">Prop Types</NavDropdown.Item>
                    <NavDropdown.Item href="#est">Estado</NavDropdown.Item>
                    <NavDropdown.Item href="useSt">useState</NavDropdown.Item>
                    <NavDropdown.Item href="delegado">Estado delegado</NavDropdown.Item>
                    <NavDropdown.Item href="cvclass">Ciclo de vida de los componentes de clase</NavDropdown.Item>
                    <NavDropdown.Item href="cvfunc">Ciclo de vida de los componentes funcionales</NavDropdown.Item>
                  </NavDropdown>
                </NavDropdown>

                <NavDropdown title="React Router" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#beneficios">¿Qué es React Router? & Beneficios de React Router</NavDropdown.Item>
                  <NavDropdown.Item href="#pilares">Componentes pilares de React Router</NavDropdown.Item>
                  <NavDropdown.Item href="#requis">Requisitos</NavDropdown.Item>
                  <NavDropdown.Item href="#crea_inst">Crear nuestro proyecto & Instalación de React Router</NavDropdown.Item>
                  <NavDropdown.Item href="#trabajo">Trabajando con React Router</NavDropdown.Item>
                  <NavDropdown.Item href="#link">Link</NavDropdown.Item>
                  <NavDropdown.Item href="#redirect">Redirect</NavDropdown.Item>
                  <NavDropdown.Item href="#hook">Hook useParams</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="#local">LocalStorage</Nav.Link>

                <NavDropdown title="Protocolo HTTP" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#http">HTTP y Características</NavDropdown.Item>
                  <NavDropdown.Item href="#p/r">Petición/Respuesta</NavDropdown.Item>
                  <NavDropdown.Item href="#format">Formato del mensaje</NavDropdown.Item>
                  <NavDropdown.Item href="#metodos">Métodos</NavDropdown.Item>
                  <NavDropdown.Item href="#encab">Encabezados o cabeceras</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="#cestado">Códigos de Estado</Nav.Link>

                <NavDropdown title="Axios" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#explicacion">Qué es Axios</NavDropdown.Item>
                  <NavDropdown.Item href="#incorporar">Incorporar Axios al proyecto</NavDropdown.Item>
                  <NavDropdown.Item href="#get">Realizar una solicitud GET</NavDropdown.Item>
                  <NavDropdown.Item href="#post">Realizar una solicitud POST</NavDropdown.Item>
                  <NavDropdown.Item href="#delete">Realizar una solicitud DELETE</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Laravel API" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#rest">RESTful APIs</NavDropdown.Item>
                  <NavDropdown.Item href="#verbs">HTTP Verbs Represent Actions and Resources</NavDropdown.Item>
                  <NavDropdown.Item href="#setting">Setting Up a Laravel Web Service Projects</NavDropdown.Item>
                  <NavDropdown.Item href="#seeding">Database Seeding</NavDropdown.Item>
                  <NavDropdown.Item href="#routes">Routes and Controllers</NavDropdown.Item>
                  <NavDropdown.Item href="#404">Sending a Correct 404 Response</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Laravel API Restful" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#preparacion">Preparación de un Proyecto</NavDropdown.Item>
                  <NavDropdown.Item href="#modelos">Creación de Modelos</NavDropdown.Item>
                  <NavDropdown.Item href="#migrations">Creación de Migrations con LAravel y PHP Artisan</NavDropdown.Item>
                  <NavDropdown.Item href="#seeders">Creación de Seeders para tablas con Laravel y PHP Artisan</NavDropdown.Item>
                  <NavDropdown.Item href="#controladores">Creación de Controladores API RESTful en Laravel</NavDropdown.Item>
                  <NavDropdown.Item href="#rutas">Creación de las Rutas de la API RESTful</NavDropdown.Item>
                  <NavDropdown.Item href="#codigos">Códigos de Estado</NavDropdown.Item>
                  <NavDropdown.Item href="#operaciones">Implementación de las operaciones de la API RESTful con Laravel</NavDropdown.Item>
                  <NavDropdown.Item href="#cache">Caché de consultas con Laravel para reducir carga en bases de datos</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Laravel Santum API RESTful" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#requisitos">Requisitos Previos</NavDropdown.Item>
                  <NavDropdown.Item href="#componentes">Instalación de los Componentes</NavDropdown.Item>
                  <NavDropdown.Item href="#trait">Agregar trait a modelo User</NavDropdown.Item>
                  <NavDropdown.Item href="#register">Crear el método register</NavDropdown.Item>
                  <NavDropdown.Item href="#login">Crear el método login</NavDropdown.Item>
                  <NavDropdown.Item href="#dataUser">Crear el método dataUser</NavDropdown.Item>
                </NavDropdown>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}