import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private authService: AuthService) {}

  validarInicioSesion() {
    const correo = (document.getElementById("correoLogin") as HTMLInputElement).value;
    const contrasena = (document.getElementById("contrasenaLogin") as HTMLInputElement).value;

    if (this.authService.login(correo, contrasena)) {
      this.router.navigate(['/admin']);
      
    } else { 
      Swal.fire({
        icon: 'error',
        title: 'Error de inicio de sesión',
        text: 'Correo o contraseña incorrectos. Por favor, inténtelo nuevamente.',
        showConfirmButton: true,
        confirmButtonText: 'Aceptar',
      });
    }
    
  }
}
