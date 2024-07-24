import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    const loginButton = document.getElementById('loginButton');
    if (loginButton) {
      loginButton.addEventListener('click', () => this.handleLogin());
    }

 
  }

  handleLogin() {
    const userType = (document.getElementById('userType') as HTMLSelectElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    if (this.authService.login(userType, email, password)) {
      this.redirectBasedOnUserType();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Credenciales inválidas',
        text: 'El email o la contraseña son incorrectos.'
      });
    }
  }

  private redirectBasedOnUserType() {
    const userType = (document.getElementById('userType') as HTMLSelectElement).value;
    if (userType === 'Administrador') {
      this.router.navigate(['/admin']);
    } 
    if (userType === 'Empresa') {
      this.router.navigate(['/customer']);
    }
  }
}
