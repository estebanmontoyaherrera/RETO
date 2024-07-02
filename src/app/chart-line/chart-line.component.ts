import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chart-line',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './chart-line.component.html',
  styleUrl: './chart-line.component.css'
})
export class ChartLineComponent implements OnInit {
  public chart: Chart;

  ngOnInit(): void {

    // datos
    const data = {
      labels: ["Pequeña", "Mediana", "Grande", "Otra"],
      datasets: [{
        label: 'Cantidad de empresas discriminadas por el tipo',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1, 
      }]
    };

    // Creamos la gráfica
    this.chart = new Chart("chart-line", {
      type: 'line' as ChartType, // tipo de la gráfica 
      data, // datos 
      options: {
        plugins: {

        }
      }
      
    })

  }
  
}
