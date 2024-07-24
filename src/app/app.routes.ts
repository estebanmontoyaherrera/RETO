import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AdminpanelComponent } from './views/adminpanel/adminpanel.component';
import { CustomerpanelComponent } from './views/customerpanel/customerpanel.component';
import { AboutComponent } from './views/about/about.component';
import { ResourcefileComponent } from './views/resourcefile/resourcefile.component';
import { AuthGuard } from './guards/auth.guard'; // Importa el guard


export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'admin',
        component: AdminpanelComponent,
        canActivate: [AuthGuard] // Aplica el guard
    },
    {
        path: 'customer',
        component: CustomerpanelComponent,
        canActivate: [AuthGuard] // Aplica el guard
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'resourcefile',
        component: ResourcefileComponent
    },
  
    // Puedes agregar más rutas según sea necesario
];
