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

      language: {
        "decimal": "",
        "emptyTable": "No hay información",
        "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
        "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
        "infoFiltered": "(Filtrado de _MAX_ total entradas)",
        "infoPostFix": "",
        "thousands": ",",
        "lengthMenu": "Mostrar _MENU_ Entradas",
        "loadingRecords": "Cargando...",
        "processing": "Procesando...",
        "search": "Buscar:",
        "zeroRecords": "Sin resultados encontrados",       
    },

    
    
    });
  }
}
