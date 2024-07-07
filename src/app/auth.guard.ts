import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    // Verificar si el usuario está autenticado
    const isAuthenticated = !!localStorage.getItem('isLoggedIn');

    if (!isAuthenticated) {
      // Si no está autenticado, redirigir al login
      this.router.navigate(['/login']);
    }

    return isAuthenticated;
  }
}
