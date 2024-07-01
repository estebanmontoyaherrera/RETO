import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component'; // Asegúrate de ajustar la ruta de importación según tu estructura de archivos
import { ChartLineComponent } from './chart-line/chart-line.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminpanelComponent },
  {path: 'graphic', component: ChartLineComponent}
  // Puedes añadir más rutas según sea necesario
];

