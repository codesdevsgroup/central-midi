import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Dropdown, Modal } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import WpLogin from '../../services/WpLogin';
import WpSignupModal from '../../services/WpSignupModal';

const CustomNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(localStorage.getItem('authToken') !== null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleLoginChange = (isUserLoggedIn) => {
    setLoggedIn(isUserLoggedIn);
    setShowDropdown(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setLoggedIn(false);
    setShowDropdown(false);
  };

  const handleShowLoginModal = () => {
    setShowLoginModal(true);
  };

  const handleHideLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleShowSignupModal = () => {
    setShowSignupModal(true);
  };

  const handleHideSignupModal = () => {
    setShowSignupModal(false);
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
          <Dropdown show={showDropdown} onToggle={(isOpen) => setShowDropdown(isOpen)}>
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
                  <Dropdown.Item onClick={handleShowLoginModal}>Login</Dropdown.Item>
                  <Dropdown.Item onClick={handleShowSignupModal}>Criar Conta</Dropdown.Item>
                </>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </div>

      {/* Adicione o modal de login aqui */}
      <Modal show={showLoginModal} onHide={handleHideLoginModal}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <WpLogin onLogin={handleLoginChange} />
        </Modal.Body>
        {/* Adicione outros elementos do seu modal aqui */}
      </Modal>

      {/* Adicione o modal de criação de conta aqui */}
      {showSignupModal && (
        <WpSignupModal onHide={handleHideSignupModal} onSignup={handleLoginChange} />
      )}
    </Navbar>
  );
};

export default CustomNavbar;