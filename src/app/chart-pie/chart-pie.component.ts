import { Component, OnInit } from '@angular/core';
import Chart, { ChartType } from 'chart.js/auto';


@Component({
  selector: 'app-chart-pie',
  standalone: true,
  imports: [],
  templateUrl: './chart-pie.component.html',
  styleUrl: './chart-pie.component.css'
})
export class ChartPieComponent implements OnInit {
  public chart: Chart;

  

  ngOnInit(): void {

    const data = {
      labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    };
    this.chart = new Chart("chart", {
      type: "pie" as ChartType, 
      data
    })
    
  }

}
