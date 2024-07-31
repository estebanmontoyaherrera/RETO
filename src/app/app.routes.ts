import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AboutComponent } from './views/about/about.component';
import { AuthGuard } from './guards/auth.guard';

//vistas del panel Admin
import { DashboaradminComponent } from './views/adminpages/dashboaradmin/dashboaradmin.component';
import { RecordsComponent } from './views/adminpages/records/records.component';
import { ResultsComponent } from './views/adminpages/results/results.component';
import { AddtestComponent } from './views/adminpages/addtest/addtest.component';
import { ConsultantsComponent } from './views/adminpages/consultants/consultants.component';
import { AddconsultantComponent } from './views/adminpages/addconsultant/addconsultant.component';
import { ReportComponent } from './views/adminpages/report/report.component';
import { AdduserComponent } from './views/adminpages/adduser/adduser.component';
import { UserlistComponent } from './views/adminpages/userlist/userlist.component';

//vistas del panel Cliente
import { DashboarcustomerComponent } from './views/customerpages/dashboarcustomer/dashboarcustomer.component';
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
        path: 'about',
        component: AboutComponent
    },

    // Rutas del panel de administración
    {
        path: 'admin',
        component: DashboaradminComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin/records',
        component: RecordsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin/results',
        component: ResultsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin/addtest',
        component: AddtestComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin/consultants',
        component: ConsultantsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin/addconsultant',
        component: AddconsultantComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin/report',
        component: ReportComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin/adduser',
        component: AdduserComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin/userlist',
        component: UserlistComponent,
        canActivate: [AuthGuard]
    },

    // Rutas del panel de cliente
    {
        path: 'customer',
        component: DashboarcustomerComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'consulting',
        component: ConsultingComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'diagnostics',
        component: DiagnosticsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'estramipymebook',
        component: EstramipymebookComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'performtest',
        component: PerformtestComponent,
        canActivate: [AuthGuard]
    }
];
