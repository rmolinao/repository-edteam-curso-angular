import { AfterViewInit, Component, ElementRef, ViewChild,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseActionComponent } from "../course-action/course-action.component";
import { Curso } from '../../interfaces/curso';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CoursesService } from '../../services/courses.service';
@Component({
    selector: 'app-cursos',
    standalone: true,
    imports: [CommonModule, CourseActionComponent,CourseActionComponent, FormsModule],
    template: `
    <div [ngSwitch]="diaActual">
      <p *ngSwitchCase="1">Iniciando la semana</p>
      <p *ngSwitchCase="2">Vamos que se puede</p>
      <p *ngSwitchCase="3">Media Semana</p>
      <p *ngSwitchCase="5">Ya llega el fin de semana</p>
      <p *ngSwitchDefault>Un dia radiante</p>
    </div>
    <div class="card">
      <div class="card-header">
        {{titulo}}
      </div>
      @if (cursos && cursos.length > 0) {
        <div  class="card-body">
          <div class="row mb-4">
            <div class="col-md-2">Filtrar por:</div>
            <div class="col-md-6">
              <input #filtro type="text"  [(ngModel)]="textoFiltrado">
              <span class="px-4">{{textoFiltrado}}</span>
              <!-- para que funcione la diretiva [(ngModel)] se debe Importar el modulo FormsModule en el componente -->
            </div>
          </div>
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
                    <ed-course-action
                      [curso]="curso"
                      (emitEdit)="onEditCurse($event)"
                      (emitDelete)="onDeleteCurse($event)"
                    />
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      }
      @else{
        <div class="card-body">
          <div class="alert alert-warning" role="alert">
            No hay cursos disponible
          </div>
        </div>
      }
    </div>
  `,
    styles: `
  .table.table-hover th+td img{
    width:  40px;
  }
  .fa.fa-edit{
    float: left;
  }
  .fa.fa-trash{
    float: right;
  }
  `
})
export class CursosComponent implements AfterViewInit{

  titulo :string ='Lista de Cursos';
  elimina:boolean = false;
  diaActual:number = 0;
  cursos:Curso[]  = [];

  constructor(private router:Router, private coursesServie:CoursesService){
    this.cursos = this.coursesServie.getCourses();
    if (this.elimina) {
      this.eliminarCursos();
    }
    let fechaActual = new Date();
    this.diaActual = fechaActual.getDay();
    console.log(this.diaActual);
  }

  @ViewChild('filtro', {static:false})
  filtro : ElementRef = <ElementRef>{};
  textoFiltrado:string = '';

  ngAfterViewInit(): void {
    this.filtro.nativeElement.value='Angular';
  }

  onDeleteCurse(curso:Curso) {
  console.log('[cursos] onDelete =>',curso);
  this.cursos = this.cursos.filter((cur :Curso) => cur.id !== curso.id );
  }

  onEditCurse(curso:Curso) {
    console.log('[cursos] onEdit =>',curso);
    //Redireccion
    this.router.navigate([`course/${curso.id}`]);
  }

  eliminarCursos() :void {
    setTimeout(() => {
      console.log("se eliminan cursos");
      if (this.cursos.length!== 0) {
        this.cursos =  [];
      }
    }, 5000);
  }

}