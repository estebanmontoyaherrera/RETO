import { Component, inject } from '@angular/core';
import { AdminsidebarComponent } from "../../../components/adminsidebar/adminsidebar.component";
import { AdminnavbarComponent } from "../../../components/adminnavbar/adminnavbar.component";
import { AdminfooterComponent } from "../../../components/adminfooter/adminfooter.component";
import { TemplateConsultComponent } from '../../template-consult/template-consult.component';
import { CommonModule } from '@angular/common';
import { Consultant } from '../../../consultant';
import { ConsultantListService } from '../../../consultant-list.service';

@Component({
  selector: 'app-consultants',
  standalone: true,
  imports: [AdminsidebarComponent, AdminnavbarComponent, AdminfooterComponent, TemplateConsultComponent, CommonModule],
  templateUrl: './consultants.component.html',
  styleUrl: './consultants.component.css'
})
export class ConsultantsComponent {
  list: Consultant [] = [];
  consultService: ConsultantListService = inject(ConsultantListService);
  constructor(){
    this.list = this.consultService.getAllConstultant();
  }
}
