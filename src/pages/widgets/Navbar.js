import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Dropdown } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import WordPressAuth from '../../services/WordPressAuth';

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" expand="lg" id="main_menu">
            <div className='container'>
      <Navbar.Brand className="me-5 text-white" as={Link} to="/">
        Central MIDI
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form inline className="d-flex">
          <FormControl type="text" placeholder="Pesquisar" className="mr-sm-2" />
          <Button variant="outline-success">
            <FaSearch />
          </Button>
        </Form>
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/">Inicio</Nav.Link>
          <Nav.Link as={Link} to="/midis">Midis</Nav.Link>
          <Nav.Link as={Link} to="/services">Serviços</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contato</Nav.Link>
        </Nav>
        <Dropdown>
            <Dropdown.Toggle variant="dark" id="user-dropdown">
              <img
                src="url-da-imagem-do-usuario"
                alt="Imagem do Usuário"
                className="user-avatar"
              />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#user-profile">Perfil</Dropdown.Item>
              <Dropdown.Item href="#user-settings">Configurações</Dropdown.Item>
              <Dropdown.Divider />
              <WordPressAuth />
            </Dropdown.Menu>
        </Dropdown>
      </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default CustomNavbar;
