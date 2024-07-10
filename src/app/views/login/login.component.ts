import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) {}

  validarInicioSesion() {
    const correo = (document.getElementById("correoLogin") as HTMLInputElement).value;
    const contrasena = (document.getElementById("contrasenaLogin") as HTMLInputElement).value;
  
    if (correo === 'admin@admin.com' && contrasena === 'admin123') {
      // Almacenar el estado de autenticación
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', correo);
  
      // Redireccionar al panel de administración
      this.router.navigate(['/admin']);
    } else {
      // Mostrar mensaje de error con SweetAlert2
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
