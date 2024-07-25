import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl:'./register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  personType: string = '';

  constructor(private router: Router) {}

  onPersonTypeChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.personType = selectElement.value;
  }

  onSubmit(event: Event) {
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    const documentValue: string = (document.getElementById('floatingDocument') as HTMLInputElement)?.value;   
    const legalName: string = (document.getElementById('floatingLegalName') as HTMLInputElement)?.value;
    const companyType: string = (document.getElementById('floatingCompanyType') as HTMLSelectElement)?.value;
    const sector: string = (document.getElementById('floatingSector') as HTMLInputElement)?.value;
    const email: string = (document.getElementById('floatingEmail') as HTMLInputElement)?.value;
    const password: string = (document.getElementById('floatingPassword') as HTMLInputElement)?.value;
    const repeatPassword: string = (document.getElementById('floatingRepeatPassword') as HTMLInputElement)?.value;

    // Validaciones basadas en el tipo de persona
    if (!this.personType || this.personType === 'Selecciona un tipo') {
      Swal.fire('Error', 'Por favor selecciona un tipo de persona', 'error');
      return;
    }

    if (!documentValue) {
      Swal.fire('Error', 'Por favor ingresa tu Nit o Documento', 'error');
      return;
    }

    if (this.personType === 'Natural') {
      if (!legalName) {
        Swal.fire('Error', 'Por favor ingresa tu nombre', 'error');
        return;
      }
      if (!sector) {
        Swal.fire('Error', 'Por favor ingresa el sector', 'error');
        return;
      }
    }

    if (this.personType === 'Jurídica') {
      if (!legalName) {
        Swal.fire('Error', 'Por favor ingresa la razón social', 'error');
        return;
      }
      if (!companyType || companyType === 'Selecciona un tipo') {
        Swal.fire('Error', 'Por favor selecciona un tipo de empresa', 'error');
        return;
      }
      if (!sector) {
        Swal.fire('Error', 'Por favor ingresa el sector', 'error');
        return;
      }
    }

    if (!email) {
      Swal.fire('Error', 'Por favor ingresa tu email', 'error');
      return;
    }

    if (!password) {
      Swal.fire('Error', 'Por favor ingresa tu contraseña', 'error');
      return;
    }

    if (password !== repeatPassword) {
      Swal.fire('Error', 'Las contraseñas no coinciden', 'error');
      return;
    }

    // Crear el objeto de datos del usuario
    const userData = {
      personType: this.personType,
      document: documentValue,      
      legalName,
      companyType: this.personType === 'Jurídica' ? companyType : '',
      sector,
      email,
      password
    };

    // Recuperar los usuarios existentes desde localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    // Agregar el nuevo usuario a la lista
    users.push(userData);
    // Guardar la lista actualizada en localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Mostrar mensaje de éxito y redirigir
    Swal.fire('Éxito', 'Registro guardado en localStorage', 'success').then(() => {
      this.router.navigate(['/login']);
    });
  }
}
