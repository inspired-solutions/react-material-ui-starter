import Service from "./Service";

class AuthService extends Service {

  async login(username, password) {
    try {
      const body = { username, password };
      return await this.http.post('/login/', body);
    } catch (error) {
      return error.response;
    }
  }

  async refreshToken(token) {

  }
}

export default AuthService;