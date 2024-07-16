
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AdminpanelComponent } from './views/adminpanel/adminpanel.component';
import { ChartLineComponent } from './views/chart-line/chart-line.component';
import { AuthGuard } from './auth.guard'; // Importar la guarda de rutas


const routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'admin', component: AdminpanelComponent, canActivate: [AuthGuard] },
    { path: 'graphic', component: ChartLineComponent }
  
  ];

  

  export class AppModule { }

