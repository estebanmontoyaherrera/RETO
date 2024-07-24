import { Component } from '@angular/core';
import { CustomersidebarComponent } from "../../../components/customersidebar/customersidebar.component";
import { CustomernavbarComponent } from "../../../components/customernavbar/customernavbar.component";
import { CustomerfooterComponent } from "../../../components/customerfooter/customerfooter.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CustomersidebarComponent, CustomernavbarComponent, CustomerfooterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
