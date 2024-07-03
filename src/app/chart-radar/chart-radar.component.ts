import { Component, OnInit } from '@angular/core';
import Chart, { ChartType } from 'chart.js/auto';


@Component({
  selector: 'app-chart-radar',
  standalone: true,
  imports: [],
  templateUrl: './chart-radar.component.html',
  styleUrl: './chart-radar.component.css'
})
export class ChartRadarComponent implements OnInit {
  public chart: Chart;

  ngOnInit(): void {
    const data = {
      labels: [
        'Conocimiento del cliente',
        'Conocimiento del negocio',
        'Coherencia del modelo de negocio',
        'Alineación en la comunicación interna',
        'Salud financiera',
      ],
      datasets: [{
        label: 'Radar estratégico',
        data: [0, 3, 1, 4, 1],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      }]
    };

    this.chart = new Chart("chart-radar", {
      type: 'radar', 
      data: data, 
    })

    // const config = {
    //   type: 'radar',
    //   data: data,
    //   options: {
    //     elements: {
    //       line: {
    //         borderWidth: 3
    //       }
    //     }
    //   },
    // };
  }
}
