import { Component, AfterViewInit } from '@angular/core';
import { AdminsidebarComponent } from "../../../components/adminsidebar/adminsidebar.component";
import { AdminnavbarComponent } from "../../../components/adminnavbar/adminnavbar.component";
import { AdminfooterComponent } from "../../../components/adminfooter/adminfooter.component";
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs5';

@Component({
  selector: 'app-records',
  standalone: true,
  imports: [AdminsidebarComponent, AdminnavbarComponent, AdminfooterComponent],
  templateUrl: './records.component.html',
  styleUrl: './records.component.css'
})
export class RecordsComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    // Asegúrate de que el elemento con id 'example' está presente en el DOM
    ($('#example') as any).DataTable({
      rowReorder: true
      // Configuración opcional aquí
    });
  }
}
