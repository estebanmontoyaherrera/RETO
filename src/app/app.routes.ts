import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AdminpanelComponent } from './views/adminpanel/adminpanel.component';
import { AboutComponent } from './views/about/about.component';
import { AuthGuard } from './guards/auth.guard'; // Importa el guard
//vistas del panel Cliente
import { DashboardComponent } from './views/customerpages/dashboard/dashboard.component';
import { ConsultingComponent } from './views/customerpages/consulting/consulting.component';
import { DiagnosticsComponent } from './views/customerpages/diagnostics/diagnostics.component';
import { EstramipymebookComponent } from './views/customerpages/estramipymebook/estramipymebook.component';
import { PerformtestComponent } from './views/customerpages/performtest/performtest.component';






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
        path: 'about',
        component: AboutComponent
    },
   
  //rutas de las vistas panel cliente
   {
    path: 'customer',
    component: DashboardComponent,
    canActivate: [AuthGuard] // Aplica el guard
   },
   {
    path: 'consulting',
    component: ConsultingComponent,
    canActivate: [AuthGuard] // Aplica el guard
   },
   {
    path: 'diagnostics',
    component: DiagnosticsComponent,
    canActivate: [AuthGuard] // Aplica el guard
   },
   {
    path: 'estramipymebook',
    component: EstramipymebookComponent,
    canActivate: [AuthGuard] // Aplica el guard
   },
   {
    path: 'performtest',
    component: PerformtestComponent,
    canActivate: [AuthGuard] // Aplica el guard
   },
 
    // Puedes agregar más rutas según sea necesario
];
