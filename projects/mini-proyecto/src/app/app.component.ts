import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EscuelaDigitalComponent } from '../../escuela-digital/escuela-digital.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EscuelaDigitalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mini-proyecto';
}
