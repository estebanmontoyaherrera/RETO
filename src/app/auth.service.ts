import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}

  login(correo: string, contrasena: string): boolean {
    if (correo === 'admin@admin.com' && contrasena === 'admin123') {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', correo);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('isLoggedIn');
  }

  getUserEmail(): string | null {
    return localStorage.getItem('userEmail');
  }
}
