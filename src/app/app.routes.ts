import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AdminpanelComponent } from './views/adminpanel/adminpanel.component';
import { ChartLineComponent } from './views/chart-line/chart-line.component';
 // Añadir un componente para el 404

export const routes: Routes = [
  { path: '', component: HomeComponent },        // Ruta para la página principal
  { path: 'login', component: LoginComponent },  // Ruta para la página de login
  { path: 'register', component: RegisterComponent },  // Ruta para la página de registro
  { path: 'admin', component: AdminpanelComponent },    // Ruta para el panel de administración
  { path: 'graphic', component: ChartLineComponent },    // Ruta para el componente de gráfico
  
];

import { ApplicationConfig } from '@angular/core';
import { provideRouter, withDebugTracing } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withDebugTracing())]
};
