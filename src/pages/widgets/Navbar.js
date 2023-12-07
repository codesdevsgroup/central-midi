import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Importa o componente Link do React Router

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">Meu Site</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form inline className="d-flex">
          <FormControl type="text" placeholder="Pesquisar" className="mr-sm-2" />
          <Button variant="outline-success">
            <FaSearch />
          </Button>
        </Form>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Inicio</Nav.Link>
          <Nav.Link as={Link} to="../services">Serviços</Nav.Link>
          <Nav.Link as={Link} to="/midis">Midis</Nav.Link>
          <Nav.Link as={Link} to="/contato">Contato</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
