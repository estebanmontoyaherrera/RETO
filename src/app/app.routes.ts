import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AdminpanelComponent } from './views/adminpanel/adminpanel.component';
import { ChartLineComponent } from './views/chart-line/chart-line.component';
import { AuthGuard } from './auth.guard'; // Importar la guarda de rutas
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withDebugTracing } from '@angular/router';
import { TestComponent } from './views/test/test.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },        // Ruta para la página principal
  { path: 'login', component: LoginComponent },  // Ruta para la página de login
  { path: 'register', component: RegisterComponent },  // Ruta para la página de registro
  { path: 'admin', component: AdminpanelComponent, canActivate: [AuthGuard] }, // Proteger la ruta con la guarda de rutas
  { path: 'graphic', component: ChartLineComponent },    // Ruta para el componente de gráfico
  { path: 'test', component: TestComponent}, 
  
];


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withDebugTracing())]
};
