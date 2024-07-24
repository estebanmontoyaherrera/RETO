import { Component } from '@angular/core';
import { CustomersidebarComponent } from "../../../components/customersidebar/customersidebar.component";
import { CustomernavbarComponent } from "../../../components/customernavbar/customernavbar.component";
import { CustomerfooterComponent } from "../../../components/customerfooter/customerfooter.component";



@Component({
  selector: 'app-consulting',
  standalone: true,
  imports: [CustomerfooterComponent, CustomernavbarComponent, CustomersidebarComponent],
  templateUrl: './consulting.component.html',
  styleUrl: './consulting.component.css'
})
export class ConsultingComponent {

}
