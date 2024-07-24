import { Component } from '@angular/core';
import { CustomersidebarComponent } from "../../../components/customersidebar/customersidebar.component";
import { CustomernavbarComponent } from "../../../components/customernavbar/customernavbar.component";
import { CustomerfooterComponent } from "../../../components/customerfooter/customerfooter.component";

@Component({
  selector: 'app-diagnostics',
  standalone: true,
  imports: [CustomersidebarComponent, CustomernavbarComponent, CustomerfooterComponent],
  templateUrl: './diagnostics.component.html',
  styleUrl: './diagnostics.component.css'
})
export class DiagnosticsComponent {

}
