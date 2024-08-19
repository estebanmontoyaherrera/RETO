import { Component, inject } from '@angular/core';
import { AdminsidebarComponent } from "../../../components/adminsidebar/adminsidebar.component";
import { AdminnavbarComponent } from "../../../components/adminnavbar/adminnavbar.component";
import { AdminfooterComponent } from "../../../components/adminfooter/adminfooter.component";
import { ConsultantListService } from '../../../consultant-list.service';
import { CommonModule } from '@angular/common';
// import internal from 'stream';

@Component({
  selector: 'app-addconsultant',
  standalone: true,
  imports: [AdminsidebarComponent, AdminnavbarComponent, AdminfooterComponent, CommonModule],
  templateUrl: './addconsultant.component.html',
  styleUrl: './addconsultant.component.css'
})
export class AddconsultantComponent {
  
  consultService: ConsultantListService = inject(ConsultantListService);
  addCons(namep: string, firstLasname: string, secondLastname: string, email: string, what: string, rol: string, xpYears: string){
    
    this.consultService.addConsultant(namep, firstLasname, secondLastname, email, parseInt(what), rol, parseInt(xpYears));
  };
  info(){
    alert("se registró el consulto");
  }
}
