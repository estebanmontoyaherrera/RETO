import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-customernavbar',
  standalone: true,
  imports: [],
  templateUrl: './customernavbar.component.html',
  styleUrls: ['./customernavbar.component.css']
})
export class CustomernavbarComponent implements OnInit {
  userEmail: string | null = null;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userEmail = localStorage.getItem('userEmail'); // Recupera el correo electrónico del usuario
  }

  handleLogout(): void {
    this.authService.logout(); // Llama al método logout del servicio de autenticación
  }
}
