import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseActionComponent } from "../course-action/course-action.component";
import { Curso } from '../../interfaces/curso';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CoursesService } from '../../services/courses.service';
import { HttpClientModule } from '@angular/common/http';
import { EMPTY, catchError, of, tap } from 'rxjs';
@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule, CourseActionComponent, FormsModule, HttpClientModule],
  template: `
    <div [ngSwitch]="diaActual">
      <p *ngSwitchCase="1">Iniciando la semana</p>
      <p *ngSwitchCase="2">Vamos que se puede</p>
      <p *ngSwitchCase="3">Media Semana</p>
      <p *ngSwitchCase="5">Ya llega el fin de semana</p>
      <p *ngSwitchDefault>Un dia radiante</p>
    </div>
    <pre>
      {{cursos | json}}
    </pre>
    <div class="card">
      <div class="card-header">
        {{titulo}}
      </div>
      @if (cursos && cursos.length > 0) {
        <div  class="card-body">
          <div class="row mb-4">
            <div class="col-md-2">Filtrar por:</div>
            <div class="col-md-6">
              <input #filtro type="text"  [(ngModel)]="textoFiltrado"> <!--estoy apuntando a _textoFiltrado por el metodo set textoFiltrado() -->
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
        @if(mensajeError){
          <div class="card-body">
          <div class="alert alert-danger" role="alert">
            {{mensajeError}}
          </div>
        </div>
        }@else {
          <div class="card-body">
          <div class="alert alert-warning" role="alert">
            No hay cursos disponible
          </div>
        </div>
        }

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
export class CursosComponent implements AfterViewInit, OnInit {

  titulo: string = 'Lista de Cursos';
  elimina: boolean = false;
  diaActual: number = 0;
  cursos: Curso[] = [];
  mensajeError: string = '';

  constructor(private router: Router, private coursesServie: CoursesService) {
    if (this.elimina) {
      this.eliminarCursos();
    }
    let fechaActual = new Date();
    this.diaActual = fechaActual.getDay();
    console.log(this.diaActual);
  }
  ngOnInit(): void {
    this.coursesServie.getCourses()
      .pipe(
        tap(cursos => console.log('Cursos', cursos)),
        catchError(error => {
          this.mensajeError = error;
          //catch and replace
          return EMPTY;
        })
      )
      .subscribe((cursos: Curso[]) => this.cursos = cursos);
    // this.cursos = this.coursesServie.getCourses();
    setTimeout(() => {
      this.textoFiltrado = 'Angular' // estoy asignando el valor de angular al atributo _textoFiltrado atraves del  set textoFiltrado();
    }, 6000);
  }

  @ViewChild('filtro', { static: false })
  filtro: ElementRef = <ElementRef>{};
  private _textoFiltrado: string = '';

  set textoFiltrado(texto: string) {
    console.log(texto);
    this._textoFiltrado = texto;
    // this.cursos = texto? this.filtrarCurso(texto):this.coursesServie.getCourses();
  }

  filtrarCurso(texto: string): Curso[] {
    return this.cursos.filter(
      (curso: Curso) => curso.name.toLowerCase().indexOf(texto.toLowerCase()) >= 0
    );
  }

  get textoFiltrado() {
    return this._textoFiltrado;
  }

  ngAfterViewInit(): void {
    // this.filtro.nativeElement.value='Angular';
  }

  onDeleteCurse(curso: Curso) {
    console.log('[cursos] onDelete =>', curso);
    this.cursos = this.cursos.filter((cur: Curso) => cur.id !== curso.id);
  }

  onEditCurse(curso: Curso) {
    console.log('[cursos] onEdit =>', curso);
    //Redireccion
    this.router.navigate([`course/${curso.id}`]);
  }

  eliminarCursos(): void {
    setTimeout(() => {
      console.log("se eliminan cursos");
      if (this.cursos.length !== 0) {
        this.cursos = [];
      }
    }, 5000);
  }

}