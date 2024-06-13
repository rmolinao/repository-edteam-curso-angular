import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule], //Importante para usar las directiva ngFor debo importar commonModule
  template: `
  <ul>
    <p *ngIf="username">Juegos de {{username}}</p>

    <li (click)="fav(game.name)"  *ngFor="let game of games">
      {{ game.name }}
    </li>
  </ul>
  `,
  styles: ``
})
export class GamesComponent {
  @Input() username? : string ;
  @Output() addFavoriteEvent = new EventEmitter<string>();
  games: Game[]  =  [
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
  fav(gameName : string){
    this.addFavoriteEvent.emit(gameName);
  };
}
interface Game{
  id:number,
  name:string
}