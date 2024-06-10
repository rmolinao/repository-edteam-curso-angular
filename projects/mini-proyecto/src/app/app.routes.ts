import { Routes } from '@angular/router';
import { SidenavComponent } from '../../sidenav/sidenav.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';

export const routes: Routes = [
    {path:'sidenav', component:SidenavComponent},
    {path:'dashboard', component:DashboardComponent}
];
