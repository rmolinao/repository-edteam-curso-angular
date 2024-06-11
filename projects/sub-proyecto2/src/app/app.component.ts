import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CursosComponent } from '../../components/cursos/cursos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CursosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sub-proyecto2';
}
