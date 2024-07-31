import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly authKey = 'isLoggedIn';
  private readonly userTypeKey = 'userType';
  private authSubject = new BehaviorSubject<boolean>(this.isAuthenticated());

  constructor(private router: Router) {
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
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.email === email && u.password === password);

    if (this.isValidAdmin(userType, email, password)) {
      this.setAuth(true);
      localStorage.setItem(this.userTypeKey, 'Administrador');
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userLegalName', 'Administrador'); // Almacena el nombre del administrador
      return true;
    }
  
    if (user && this.isValidEmpresa(userType, email, password)) {
      this.setAuth(true);
      localStorage.setItem(this.userTypeKey, 'Empresa');
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userLegalName', user.legalName); // Almacena el nombre legal del usuario
      return true;
    }
  
    return false;
  }

  logout(): void {
    this.setAuth(false);
    localStorage.removeItem(this.userTypeKey);
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userLegalName'); // Elimina el nombre legal al cerrar sesión
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem(this.authKey) === 'true';
  }

  getAuthStatus() {
    return this.authSubject.asObservable();
  }

  getUserType(): string | null {
    return localStorage.getItem(this.userTypeKey);
  }

  private checkStoredAuth(): void {
    if (this.isAuthenticated()) {
      this.authSubject.next(true);
    }
  }

  private setAuth(status: boolean): void {
    localStorage.setItem(this.authKey, status.toString());
    this.authSubject.next(status);
  }
}
