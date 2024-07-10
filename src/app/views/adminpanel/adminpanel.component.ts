import { Component, OnInit  } from '@angular/core';
import bootstrap, { Tooltip } from 'bootstrap';
import { RadarController } from 'chart.js';
import { Chart } from 'chart.js';
import { ChartLineComponent } from '../chart-line/chart-line.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ChartRadarComponent } from '../chart-radar/chart-radar.component';
import { ChartPieComponent } from '../chart-pie/chart-pie.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adminpanel',
  standalone: true,
  imports: [ChartLineComponent, ChartRadarComponent, ChartPieComponent, ChartRadarComponent],
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {

  constructor(private router: Router) {}
  userEmail: string | null = '';

  ngOnInit(): void {
    this.userEmail = localStorage.getItem('userEmail');
    // Inicializa tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map((tooltipTriggerEl) => new Tooltip(tooltipTriggerEl));
      
      
  }

  cerrarSesion() {
    // Limpiar cualquier estado de sesión almacenado (por ejemplo, en localStorage)
    localStorage.removeItem('isLoggedIn');

    // Redirigir al usuario al inicio de sesión
    this.router.navigate(['/login']);
  }
 
  
}


