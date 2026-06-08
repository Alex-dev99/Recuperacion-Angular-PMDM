import { Injectable } from '@angular/core';
import { environment } from '../enviroments/enviroment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly TOKEN_KEY = 'tmdb_token';


  login(): void {
    const token = environment.tmdbToken;
    if (token) {
      localStorage.setItem(this.TOKEN_KEY, token);
    } else {
      alert('Token no configurado en environment.ts');
      alert('Falta el token de TMDB. Revisa environment.ts');
    }
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
