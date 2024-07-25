import { Component } from '@angular/core';
import { CustomersidebarComponent } from "../../../components/customersidebar/customersidebar.component";
import { CustomernavbarComponent } from "../../../components/customernavbar/customernavbar.component";
import { CustomerfooterComponent } from "../../../components/customerfooter/customerfooter.component";

@Component({
  selector: 'app-dashboarcustomer',
  standalone: true,
  imports: [CustomersidebarComponent, CustomernavbarComponent, CustomerfooterComponent],
  templateUrl: './dashboarcustomer.component.html',
  styleUrl: './dashboarcustomer.component.css'
})
export class DashboarcustomerComponent {

}
