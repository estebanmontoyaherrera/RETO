import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly authKey = 'isLoggedIn';
  private authSubject = new BehaviorSubject<boolean>(this.isAuthenticated());

  constructor(private router: Router) {
    // Verifica el estado de autenticación al inicializar el servicio
    this.checkStoredAuth();
  }

  private isValidAdmin(userType: string, email: string, password: string): boolean {
    return userType === 'Administrador' && email === 'admin@admin.com' && password === 'admin123';
  }

  private isValidEmpresa(userType: string, email: string, password: string): boolean {
    if (userType === 'Empresa') {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      return users.some((u: any) => u.email === email && u.password === password);
    }
    return false;
  }

  login(userType: string, email: string, password: string): boolean {
    if (this.isValidAdmin(userType, email, password)) {
      this.setAuth(true);
      localStorage.setItem('userEmail', email); // Guarda el correo electrónico del usuario
      return true;
    }
  
    if (this.isValidEmpresa(userType, email, password)) {
      this.setAuth(true);
      localStorage.setItem('userEmail', email); // Guarda el correo electrónico del usuario
      return true;
    }
  
    return false;
  }
  
  logout(): void {
    this.setAuth(false);
    localStorage.removeItem('userEmail'); // Elimina el correo electrónico al cerrar sesión
    this.router.navigate(['/login']);
  }
  

  isAuthenticated(): boolean {
    return localStorage.getItem(this.authKey) === 'true';
  }

  getAuthStatus() {
    return this.authSubject.asObservable(); // Permite que los componentes se suscriban a los cambios de estado de autenticación
  }

  private checkStoredAuth(): void {
    if (this.isAuthenticated()) {
      this.authSubject.next(true); // Notifica que el usuario ya está autenticado
    }
  }

  private setAuth(status: boolean): void {
    localStorage.setItem(this.authKey, status.toString());
    this.authSubject.next(status); // Notifica el cambio en el estado de autenticación
  }


}
