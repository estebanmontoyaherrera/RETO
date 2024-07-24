import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes'; // Importa el array de rutas desde app.routes.ts
import { NavbarComponent } from './components/navbar/navbar.component'; // Ajusta la ruta según sea necesario
import { CustomersidebarComponent } from './components/customersidebar/customersidebar.component';
@NgModule({
  imports: [RouterModule.forRoot(routes),NavbarComponent,CustomersidebarComponent],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
