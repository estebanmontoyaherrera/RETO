import { Component } from '@angular/core';
import { CustomersidebarComponent } from "../../../components/customersidebar/customersidebar.component";
import { CustomernavbarComponent } from "../../../components/customernavbar/customernavbar.component";
import { CustomerfooterComponent } from "../../../components/customerfooter/customerfooter.component";

@Component({
  selector: 'app-estramipymebook',
  standalone: true,
  imports: [CustomersidebarComponent, CustomernavbarComponent, CustomerfooterComponent],
  templateUrl: './estramipymebook.component.html',
  styleUrl: './estramipymebook.component.css'
})
export class EstramipymebookComponent {

}
