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
        <app-games/>
      }@else {
        <p>Inicia sesion</p>
        <button (click)="isloggedIn=true">Log In</button>
      }
    </section>
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
  greet (){
    alert('!!! Hola');
  };
}
