import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EscuelaDigitalComponent } from '../../escuela-digital/escuela-digital.component';
import { NavbarComponent } from '../../navbar/navbar.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { SidenavComponent } from '../../sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    EscuelaDigitalComponent,
    NavbarComponent,
    SidenavComponent,
    DashboardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mini-proyecto';
}
