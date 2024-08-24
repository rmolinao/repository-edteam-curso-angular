import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-add-reactive',
  standalone: true,
  imports: [ReactiveFormsModule],
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
                    required
                  />
                  <!-- <div  class="mt-4 alert alert-danger" role="alert">
                    Nombre es Requerido!
                  </div> -->
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
                    required
                  />
                  <!-- @if (descripttion.invalid&&(descripttion.dirty||descripttion.touched)) {
                    <div *ngIf="descripttion?.errors?.['required']" class="mt-4 alert alert-danger" role="alert">
                      Nombre es Requerido
                    </div>

                    <div *ngIf="descripttion?.errors?.['minlength']" class="mt-4 alert alert-danger" role="alert">
                      La descripcion debe tener al menos 5 caracteres
                    </div>
                    <Pre>{{descripttion.errors | json}}</Pre>
                  } -->
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
                    required
                  />
                  <!-- <div *ngIf="price.invalid && (price.dirty||price.touched)" class="mt-4 alert alert-danger" role="alert">
                    Precio es Requerido
                  </div> -->
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
                <button type="submit" class="btn btn-primary">
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
      name : new FormControl('Angular desde Cero'),
      descripttion: new FormControl(null),
      price : new FormControl(null),
      imageUrl: new FormControl(null)
    });
  }
  onSubmit(){
    console.log('submit',this.courseAddForm);
  }
}
