import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const WpSignupModal = ({ onHide, onSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await fetch('https://projeto.codesdevs.com/wp-json/custom/v1/signup/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        // Criação de conta bem-sucedida
        console.log('Criação de conta bem-sucedida! Nível de acesso:', data.user_role);
        onHide(); // Fecha o modal após o sucesso
        // Chame a função onSignup passando a informação do nível de acesso
        onSignup(true, data.user_role);
      } else {
        // Criação de conta falhou
        console.error('Criação de conta falhou:', data.error_message);
        onSignup(false, null);
      }
    } catch (error) {
      console.error('Erro durante a criação de conta:', error.message);
      onSignup(false, null);
    }
  };

  return (
    <Modal show={true} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Criar Conta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formUsername">
            <Form.Label>Nome de usuário</Form.Label>
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

          <Button variant="primary" onClick={handleSignup}>
            Criar Conta
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default WpSignupModal;
