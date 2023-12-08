import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Dropdown } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SignUpAPI from '../../services/SignUpAPI';

const CustomNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Adicione o estado para controlar o status de login

  // Função para abrir/fechar o dropdown
  const handleDropdownToggle = (isOpen) => {
    setShowDropdown(isOpen);
  };

  // Função para fazer logout
  const handleLogout = () => {
    // Adicione a lógica de logout aqui, como limpar o token JWT
    setIsLoggedIn(false);
    setShowDropdown(false);
  };

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
          <Dropdown show={showDropdown} onToggle={handleDropdownToggle}>
            <Dropdown.Toggle variant="dark" id="user-dropdown">
              <img
                src={isLoggedIn ? "url-da-imagem-do-usuario" : ""}
                alt="Imagem do Usuário"
                className="user-avatar"
              />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {isLoggedIn ? (
                <>
                  <Dropdown.Item href="#user-profile">Perfil</Dropdown.Item>
                  <Dropdown.Item href="#user-settings">Configurações</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleLogout}>Sair</Dropdown.Item>
                </>
              ) : (
                <>
                  {/* Adicione o SignUpAPI para exibir o formulário de login e fazer o login */}
                  <SignUpAPI onLogin={() => setIsLoggedIn(true)} />
                  <Dropdown.Item>Criar Conta</Dropdown.Item>
                </>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default CustomNavbar;
