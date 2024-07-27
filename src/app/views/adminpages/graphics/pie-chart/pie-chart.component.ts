import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {
  public chart!: Chart;

  ngOnInit(): void {
    const data = {
      labels: ['Beneficiarios', 'Donantes', 'Voluntarios', 'Proveedores', 'Gobierno'],
      datasets: [{
        label: 'Distribución de Segmentos',
        data: [300, 200, 150, 100, 50],  // Cantidades de ejemplo para cada segmento
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',  // Color para Beneficiarios
          'rgba(153, 102, 255, 0.2)', // Color para Donantes
          'rgba(255, 159, 64, 0.2)',  // Color para Voluntarios
          'rgba(255, 206, 86, 0.2)',  // Color para Proveedores
          'rgba(54, 162, 235, 0.2)'   // Color para Gobierno
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',  // Borde para Beneficiarios
          'rgba(153, 102, 255, 1)', // Borde para Donantes
          'rgba(255, 159, 64, 1)',  // Borde para Voluntarios
          'rgba(255, 206, 86, 1)',  // Borde para Proveedores
          'rgba(54, 162, 235, 1)'   // Borde para Gobierno
        ],
        borderWidth: 1
      }]
    };

    this.chart = new Chart("pieChart", {
      type: 'pie' as ChartType,
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                let label = context.label || '';
                if (label) {
                  label += ': ';
                }
                if (context.raw !== null) {
                  label += context.raw;
                }
                return label;
              }
            }
          }
        }
      }
    });
  }
}
