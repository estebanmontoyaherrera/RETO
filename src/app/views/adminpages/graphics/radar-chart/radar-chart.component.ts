import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-radar-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss']
})
export class RadarChartComponent {
  public chart!: Chart;

  ngOnInit(): void {
    const data = {
      labels: ['Calidad del Producto', 'Atención al Cliente', 'Innovación', 'Precio', 'Distribución'],
      datasets: [{
        label: 'Posición Competitiva de Mabeka',
        data: [4, 3, 5, 2, 4], // Valores de ejemplo
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    };

    this.chart = new Chart("radarChart", {
      type: 'radar' as ChartType,
      data: data,
      options: {
        responsive: true,
        scales: {
          r: {
            angleLines: {
              display: false
            },
            suggestedMin: 0,
            suggestedMax: 5
          }
        },
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                let label = context.dataset.label || '';
                if (label) {
                  label += ': ';
                }
                if (context.parsed.r !== null) {
                  label += context.parsed.r;
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
