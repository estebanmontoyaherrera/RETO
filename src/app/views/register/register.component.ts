import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  validarFormulario() {
    const tipoPersona = (document.getElementById("tipoPersona") as HTMLSelectElement).value;
    const nombre = (document.getElementById("nombre") as HTMLInputElement).value;
    const tipoEmpresa = (document.getElementById("tipoEmpresa") as HTMLSelectElement).value;
    const sector = (document.getElementById("sector") as HTMLInputElement).value;
    const razonSocial = (document.getElementById("razonSocial") as HTMLInputElement).value;
    const correo = (document.getElementById("correo") as HTMLInputElement).value;
    const contrasena = (document.getElementById("contrasena") as HTMLInputElement).value;

    if (!tipoPersona) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, selecciona el tipo de persona.',
        showConfirmButton: true,
        confirmButtonText: 'Aceptar',
      });
      return false;
    }

    if (!nombre) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, ingrese su nombre.',
        showConfirmButton: true,
        confirmButtonText: 'Aceptar',
      });
      return false;
    }
   
    if (!correo) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, ingrese su correo electrónico.',
        showConfirmButton: true,
        confirmButtonText: 'Aceptar',
      });
      return false;
    }
    if (!contrasena) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, ingrese su contraseña.',
        showConfirmButton: true,
        confirmButtonText: 'Aceptar',
      });
      return false;
    }

    return true;
  }

  showSuccessAlert() {
    if (this.validarFormulario()) {
      Swal.fire({
        icon: 'success',
        title: '¡Registro exitoso!',
        text: 'Te has registrado correctamente.',
        showConfirmButton: true,
        confirmButtonText: 'Aceptar',
      });
    }
  }
}
