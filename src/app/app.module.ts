import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { AuthGuard } from './guards/auth.guard';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CustomersidebarComponent } from './components/customersidebar/customersidebar.component';

@NgModule({
  declarations: [
    // No se declara AppComponent aquí porque es standalone
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NavbarComponent ,// Importa NavbarComponent aquí
    CustomersidebarComponent
  ],
  providers: [AuthGuard], // Asegúrate de proporcionar el guard
  // Elimina bootstrap: [AppComponent]
})
export class AppModule { }
