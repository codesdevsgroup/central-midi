import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const WordPressAuth = () => {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await fetch('https://projeto.codesdevs.com/wp-json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error(`Erro ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();

      // Store the token in localStorage after successful login
      localStorage.setItem('authToken', data.token);

      // Retrieve user information after successful login
      const userResponse = await fetch('https://projeto.codesdevs.com/wp-json/jwt-auth/v1/token', {
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      });

      if (!userResponse.ok) {
        throw new Error(`Erro ${userResponse.status}: ${userResponse.statusText}`);
      }

      const userData = await userResponse.json();
      setUserData(userData);

      // Close the modal after successful login
      setShowModal(false);
    } catch (error) {
      console.error('Erro de login:', error.message);
      // Logic to handle login errors
    }
  };

  return (
    <>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Fazer Login
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login no WordPress</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Nome de Usuário</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite seu nome de usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleLogin}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>

      {userData && (
        <div>
          <p>Nome do usuário: {userData.name}</p>
          <p>Email do usuário: {userData.email}</p>
          {/* Add more user information fields as needed */}
        </div>
      )}
    </>
  );
};

export default WordPressAuth;
