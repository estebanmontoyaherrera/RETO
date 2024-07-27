import { Component } from '@angular/core';
import { AdminsidebarComponent } from "../../../components/adminsidebar/adminsidebar.component";
import { AdminnavbarComponent } from "../../../components/adminnavbar/adminnavbar.component";
import { AdminfooterComponent } from "../../../components/adminfooter/adminfooter.component";
import { LineChartComponent } from '../graphics/line-chart/line-chart.component';
import { BarChartComponent } from "../graphics/bar-chart/bar-chart.component";
import { RadarChartComponent } from "../graphics/radar-chart/radar-chart.component";
import { PieChartComponent } from "../graphics/pie-chart/pie-chart.component";
@Component({
  selector: 'app-dashboaradmin',
  standalone: true,
  imports: [AdminsidebarComponent, AdminnavbarComponent, AdminfooterComponent, LineChartComponent, BarChartComponent, RadarChartComponent, PieChartComponent],
  templateUrl: './dashboaradmin.component.html',
  styleUrl: './dashboaradmin.component.css'
})
export class DashboaradminComponent {

}
