import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [GamesComponent],
  template: `
    <section>
      @if (isloggedIn) {
        <p>
          <img
            (click)="greet()"
            src="https://github.com/rmolinao.png"
            alt="photo"
          >
        </p>
        <!-- importarte: paracapturar el evento se pasa por parametr $evente -->
        <app-games
          (addFavoriteEvent)="getFavorite($event)"
          username="{{username}}"
        />
      }@else {
        <p>Inicia sesion</p>
        <button (click)="isloggedIn=true">Log In</button>
      }
    </section>
    @if(favGame){
      <p>Tu juego favorito es {{favGame}}</p>
    }
  `,
  styles: `
    section {
      max-width: 500px;
      margin: 0 auto;
      padding-top: 32px;
      font-size: 24px;
    }
    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }
  `
})
export class NavbarComponent {
  isloggedIn = false;
  username : string | null  = 'Rafael';
  favGame : string = '';
  greet (){
    alert('!!! Hola');
  };
  getFavorite(gameFavorite :string){
    this.favGame = gameFavorite;
  }
}
