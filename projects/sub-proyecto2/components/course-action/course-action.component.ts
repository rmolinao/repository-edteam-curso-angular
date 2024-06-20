import { Component, Input, OnInit } from '@angular/core';
import { Curso } from '../../interfaces/curso';

@Component({
  selector: 'ed-course-action',
  standalone: true,
  imports: [],
  template: `
    <span
        (click)="editarCurso(curso)"
        (mouseover)="onMouseOver($event)"
        (dblclick)="onBodleClick($event)"
      ><!-- para capturar los eventos coloco antes  del parametro de la funion  "$"-->
        <i class="fa fa-edit"></i>
      </span>
      <span (click)="eliminarCurso(curso)"><i class="fa fa-trash"></i></span>
  `,
  styles: `
  .fa.fa-edit{
    float: left;
  }
  .fa.fa-trash{
    float: right;
  }
  `
})
export class CourseActionComponent implements OnInit {
  @Input()
  curso: Curso = <Curso>{};
  editarCurso(curso : Curso){
    console.log(curso);
  }
  eliminarCurso(curso : Curso){
    console.log(curso);
  }
  onBodleClick(event : MouseEvent){

    if (event.type === "dblclick") {
      console.log(event);
    }
  }

  onMouseOver(event : MouseEvent){
    if (event.type ==="mouseover") {
      console.log('object :>> ', event);
    }
  }

  ngOnInit(): void {

  }

}
