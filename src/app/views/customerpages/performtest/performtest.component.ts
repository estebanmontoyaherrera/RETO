import { Component } from '@angular/core';
import { CustomersidebarComponent } from "../../../components/customersidebar/customersidebar.component";
import { CustomernavbarComponent } from "../../../components/customernavbar/customernavbar.component";
import { CustomerfooterComponent } from "../../../components/customerfooter/customerfooter.component";

@Component({
  selector: 'app-performtest',
  standalone: true,
  imports: [CustomersidebarComponent, CustomernavbarComponent, CustomerfooterComponent],
  templateUrl: './performtest.component.html',
  styleUrl: './performtest.component.css'
})
export class PerformtestComponent {

}
