import { User } from 'domain/models';

class LocalStorageService {
  private userKey = 'user';
  private tokenKey = 'token';

  get user(): User {
    const userJson = localStorage.getItem(this.userKey);
    return JSON.parse(userJson ? userJson : '');
  }

  set user(user: User) {
    const stringifiedUser = JSON.stringify(user);
    localStorage.setItem(this.userKey, stringifiedUser);
  }

  get token(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  set token(token: string | null) {
    localStorage.setItem(this.tokenKey, token ? token : '');
  }

  clearToken = () => localStorage.setItem(this.tokenKey, '');
}

const localStorageService = new LocalStorageService();

export { localStorageService };
