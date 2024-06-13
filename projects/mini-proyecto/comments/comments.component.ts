import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <h3>Comentarios de los que sea</h3>
    <img src="https://media.npr.org/assets/img/2023/01/14/this-is-fine_custom-b7c50c845a78f5d7716475a92016d52655ba3115.jpg"/>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, deserunt ut qui in voluptates sunt similique ullam aut perspiciatis? Perspiciatis odit tempore dolorum voluptates veritatis doloremque quaerat, aut suscipit tenetur?
    </p>
  `,
  styles: `
    img {
      width:100%;
      height: auto;
    }
  `
})
export class CommentsComponent {

}
