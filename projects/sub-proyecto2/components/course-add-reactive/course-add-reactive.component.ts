import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-course-add-reactive',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div class="container-md ">
      <div class="row justify-content-center align-items-center">
        <div class="col-6">
          <div class="card mt-4">
            <div class="card-header">Nuevo Curso</div>
            <div class="card-body">
              <form [formGroup]="courseAddForm" (ngSubmit)="onSubmit()">
                <div class=" form-group mb-3">
                  <label for="name" class="form-label">Nombre *</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    aria-describedby="emailHelp"
                    name="name"
                    placeholder="Ingrese Nombre"
                    [formControlName]="'name'"
                  />

                  <div
                    *ngIf="courseAddForm.get('name')!.invalid
                          && (courseAddForm.get('name')!.dirty
                          ||courseAddForm.get('name')!.touched)"

                    class="mt-4 alert alert-danger" role="alert">
                    Nombre es Requerido!
                  </div>
                </div>
                <div class=" form-group mb-3">
                  <label for="name" class="form-label">Descripcion *</label>
                  <input
                    type="text"
                    class="form-control"
                    id="descripttion"
                    aria-describedby="emailHelp"
                    name="descripttion"
                    placeholder="Descripcion"
                    minlength="5"
                    formControlName="descripttion"
                  />

                  @if (courseAddForm.get('descripttion')!.invalid&&(courseAddForm.get('descripttion')!.dirty||courseAddForm.get('descripttion')!.touched)) {
                    <div
                      *ngIf="courseAddForm.get('descripttion')!.getError('required')"
                      class="mt-4 alert alert-danger" role="alert">
                      Nombre es Requerido
                    </div>

                    <div *ngIf="courseAddForm.get('descripttion')!.getError('minlength')" class="mt-4 alert alert-danger" role="alert">
                      La descripcion debe tener al menos 5 caracteres
                    </div>
                    <Pre>{{courseAddForm.get('descripttion')!.errors | json}}</Pre>
                  }
                </div>
                <div class=" form-group mb-3">
                  <label for="price" class="form-label">Precio *</label>
                  <input
                    type="number"
                    class="form-control"
                    id="price"
                    aria-describedby="emailHelp"
                    name="price"
                    placeholder="Precio"
                    formControlName="price"
                  />
                  <div *ngIf="price.invalid && (price.dirty||price.touched)" class="mt-4 alert alert-danger" role="alert">
                    Precio es Requerido
                  </div>
                </div>
                <div class=" form-group mb-3">
                  <label for="imageUrl" class="form-label">Url de imagen</label>
                  <input
                    type="text"
                    class="form-control"
                    id="imageUrl"
                    aria-describedby="emailHelp"
                    name="imageUrl"
                    placeholder="Url de imagen"
                    formControlName="imageUrl"
                  />
                </div>

                <div class="form-group form-check mb-3">
                  <input type="checkbox" class="form-check-input" id="active" />
                  <label for="active" class="form-check-label"
                    >Curso Activo</label
                  >
                </div>
                <button
                  type="submit"
                  [disabled]="courseAddForm.invalid || courseAddForm.untouched"
                  class="btn btn-primary">
                  Crear Curso
                </button>
              </form>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class CourseAddReactiveComponent implements OnInit {
  courseAddForm!: FormGroup;

  constructor(){}
  ngOnInit(){
    this.courseAddForm = new FormGroup({
      name : new FormControl(null,Validators.required),
      descripttion: new FormControl(null,[
        Validators.required,
        Validators.maxLength(5),
      ]),
      price : new FormControl(null,Validators.required),
      imageUrl: new FormControl(null)
    });
  }
  onSubmit(){
    console.log('submit',this.courseAddForm);
  }
  get price(){
    return this.courseAddForm.get('price')!;
  }
}
