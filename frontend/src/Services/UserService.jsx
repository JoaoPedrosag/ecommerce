import api from './api';

export default class UserServices {

  async login(dados) {
    const { data } = await api.post('/auth/login', dados)
    if (data) {
      console.log(data);
      localStorage.setItem("@ecommerce_token", data)
      api.defaults.headers.authorization = `Bearer ${data}`;
      return true
    }
    return false;
  }

  async cadastrar(dados) {
    return api.post('/auth/register', dados)
  }

  usuarioAutenticado() {
    return localStorage.getItem("@ecommerce_token") !== undefined ? true : false
  }

  async logout() {
    localStorage.removeItem("@ecommerce_token")
  }

  async isAdmin() {

  }
}