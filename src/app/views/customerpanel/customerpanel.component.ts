import { Component, Renderer2, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CustomersidebarComponent } from "../../components/customersidebar/customersidebar.component";
import { CustomernavbarComponent } from "../../components/customernavbar/customernavbar.component";
import { CustomerfooterComponent } from "../../components/customerfooter/customerfooter.component";

@Component({
  selector: 'app-customerpanel',
  standalone: true,
  templateUrl: './customerpanel.component.html',
  styleUrls: ['./customerpanel.component.css'],
  imports: [CustomersidebarComponent, CustomernavbarComponent, CustomerfooterComponent]
})
export class CustomerpanelComponent implements OnInit {

  constructor(
    private renderer: Renderer2,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const sidebarToggle = document.querySelector("#sidebar-toggle");
    if (sidebarToggle) {
      sidebarToggle.addEventListener("click", () => {
        const sidebar = document.querySelector("#sidebar");
        if (sidebar) {
          if (sidebar.classList.contains('collapsed')) {
            this.renderer.removeClass(sidebar, 'collapsed');
          } else {
            this.renderer.addClass(sidebar, 'collapsed');
          }
        }
      });
    }

    const themeToggle = document.querySelector(".theme-toggle");
    if (themeToggle) {
      themeToggle.addEventListener("click", () => {
        this.toggleLocalStorage();
        this.toggleRootClass();
      });
    }

    if (this.isLight()) {
      this.toggleRootClass();
    }
  }

  toggleRootClass(): void {
    const current = document.documentElement.getAttribute('data-bs-theme');
    const inverted = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme', inverted);
  }

  toggleLocalStorage(): void {
    if (this.isLight()) {
      localStorage.removeItem("light");
    } else {
      localStorage.setItem("light", "set");
    }
  }

  isLight(): boolean {
    return localStorage.getItem("light") !== null;
  }

  handleLogout(): void {
    
    this.authService.logout(); // Llama al método logout del servicio de autenticación
    
  }
}