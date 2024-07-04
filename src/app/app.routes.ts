import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AdminpanelComponent } from './views/adminpanel/adminpanel.component'; // Asegúrate de ajustar la ruta de importación según tu estructura de archivos
import { ChartLineComponent } from './views/chart-line/chart-line.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminpanelComponent },
  {path: 'graphic', component: ChartLineComponent}
  // Puedes añadir más rutas según sea necesario
];

