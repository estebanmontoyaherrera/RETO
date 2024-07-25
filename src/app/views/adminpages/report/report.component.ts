import { Component } from '@angular/core';
import { AdminsidebarComponent } from "../../../components/adminsidebar/adminsidebar.component";
import { AdminnavbarComponent } from "../../../components/adminnavbar/adminnavbar.component";
import { AdminfooterComponent } from "../../../components/adminfooter/adminfooter.component";

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [AdminsidebarComponent, AdminnavbarComponent, AdminfooterComponent],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {

}
