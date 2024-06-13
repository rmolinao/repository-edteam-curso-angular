import { Routes } from '@angular/router';
import { SidenavComponent } from '../../sidenav/sidenav.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { DeferComponent } from '../../defer/defer.component';

export const routes: Routes = [
    {path:'sidenav', component:SidenavComponent},
    {path:'dashboard', component:DashboardComponent},
    {path:'defer', component:DeferComponent},
    {path:'', redirectTo:'/defer',pathMatch:'full'}
];