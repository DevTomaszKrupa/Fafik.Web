class LocalStorageService {
  private userKey = 'user';
  private tokenKey = 'token';

  get user() {
    const userJson = localStorage.getItem(this.userKey);
    return JSON.parse(userJson ? userJson : '');
  }

  set user(user) {
    const stringifiedUser = JSON.stringify(user);
    localStorage.setItem(this.userKey, stringifiedUser);
  }

  get token() {
    return localStorage.getItem(this.tokenKey);
  }

  set token(token) {
    localStorage.setItem(this.tokenKey, token ? token : '');
  }

  clearToken = () => localStorage.setItem(this.tokenKey, '');
}

const localStorageService = new LocalStorageService();

export { localStorageService };
