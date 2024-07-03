import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    tipoPersona: 'Natural',
    nombre: '',
    tipoEmpresa: 'Pequeña',
    sector: '',
    razonSocial: '',
    correo: '',
    contrasena: ''
  };

  onSubmit() {
    console.log('User registration data:', this.user);
    // Implement your registration logic here (e.g., API call, validation)
    // You can also show a success message or redirect the user upon successful registration
  }
}

