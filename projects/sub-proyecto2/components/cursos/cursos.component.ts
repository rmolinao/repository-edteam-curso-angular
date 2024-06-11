import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [],
  template: `
    <div class="card">
      <div class="card-header">
        {{titulo}}
      </div>
      <div class="card-body">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Logo</th>
              <th scope="col">Nombre</th>
              <th scope="col">Desripcion</th>
              <th scope="col">Fecha Inicio</th>
              <th scope="col">Preico</th>
              <th scope="col">Rating</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            @for (curso of cursos; track curso.id) {
              <tr>
                <th scope="row">{{curso.id}}</th>
                <td>
                  <img
                    [src]="curso.img"
                    [title]="curso.name"
                  >
                </td>
                <td>{{curso.name}}</td>
                <td>{{curso.descripttion}}</td>
                <td>{{curso.startDate}}</td>
                <td>{{curso.price}}</td>
                <td>{{curso.rating}}</td>
                <td>
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: `
  .table.table-hover th+td img{
    width:  40px;
  }`
})
export class CursosComponent {
  titulo :string ='Lista de Cursos';
  cursos:any = [
    { id:1,
      name:'TypeSrcipt Desde Cero',
      startDate:'August 10, 2009',
      descripttion:'lleva javaScript al siguiente Nivel ...',
      price:25.99,
      rating:4.5,
      img:'assets/images/angular.png'
    },
    { id:2,
      name:'Angular Desde Cero',
      startDate:'September 10, 2009',
      descripttion:'Aprende el framework frondend ...',
      price:25.99,
      rating:4.5,
      img:'assets/images/typescript.png'
    },
  ];
}
