import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const isLoggedIn = this.authService.isAuthenticated();
    const userType = this.authService.getUserType();
    const routeUrl = state.url;

    if (!isLoggedIn) {
      this.router.navigate(['/login']);
      return false;
    }

    if (routeUrl.startsWith('/admin') && userType !== 'Administrador') {
      this.router.navigate(['/home']);
      return false;
    }

    if (routeUrl.startsWith('/customer') && userType !== 'Empresa') {
      this.router.navigate(['/home']);
      return false;
    }

    return true;
  }
}
