import { Component, OnInit } from '@angular/core';
import bootstrap, { Tooltip } from 'bootstrap';
import { RadarController } from 'chart.js';
import { Chart } from 'chart.js';
import { ChartLineComponent } from '../chart-line/chart-line.component';
import { RouterLink, RouterOutlet } from '@angular/router';

interface Empresa {
  nombre: string;
  tipoEmpresa: string;
  sector: string;
  razonSocial: string;
}

@Component({
  selector: 'app-adminpanel',
  standalone: true,
  imports: [ChartLineComponent],
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Inicializa tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map((tooltipTriggerEl) => new Tooltip(tooltipTriggerEl));
      
      
  }


 
  
}


