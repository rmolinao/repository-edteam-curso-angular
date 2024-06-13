import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule], //Importante para usar las directiva ngFor debo importar commonModule
  template: `
  <ul>
    <p *ngIf="username">Juegos de {{username}}</p>

    <li *ngFor="let game of games">
      {{ game.name }}
    </li>
  </ul>
  `,
  styles: ``
})
export class GamesComponent {
  @Input() username? : string ;
  games = [
    { id:1,
      name:'Uncharted 4'
    },
    { id:2,
      name:'Horizont Zero Dawn'
    },
    { id:3,
      name:'Bloodborne'
    }
  ];
}
