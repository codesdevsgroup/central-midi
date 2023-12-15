import axios from 'axios';

class AuthService {
  async login(email, password) {
    const url = 'https://projeto.codesdevs.com/?rest_route=/simple-jwt-login/v1/auth';
    try {
      const response = await axios.post(url, {
        email: email,
        password: password
      });
      return response.data;
    } catch (error) {
      console.error('Erro na requisição', error);
      throw error;
    }
  }
}

export default new AuthService();
