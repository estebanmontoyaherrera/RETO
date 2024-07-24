import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-adminnavbar',
  standalone: true,
  imports: [],
  templateUrl: './adminnavbar.component.html',
  styleUrl: './adminnavbar.component.css'
})
export class AdminnavbarComponent implements OnInit {
  userEmail: string | null = null;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userEmail = localStorage.getItem('userEmail'); // Recupera el correo electrónico del usuario
  }

  handleLogout(): void {
    this.authService.logout(); // Llama al método logout del servicio de autenticación
  }

}
