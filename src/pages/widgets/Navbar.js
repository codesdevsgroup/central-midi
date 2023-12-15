import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Login from './Login';

const CustomNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleDropdownToggle = (isOpen) => {
    setShowDropdown(isOpen);
  };

  const handleLogout = () => {
    // Adicionar lógica de logout aqui, como limpar o token JWT
    setIsLoggedIn(false);
    setShowDropdown(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLoginModal(false);
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

          {isLoggedIn ? (
            <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
          ) : (
            <Button variant="outline-light" onClick={() => setShowLoginModal(true)}>Login</Button>
          )}

        </Navbar.Collapse>
      </div>

      {/* Componente Login */}
      <Login show={showLoginModal} onHide={() => setShowLoginModal(false)} onLogin={handleLogin} />
    </Navbar>
  );
};

export default CustomNavbar;
