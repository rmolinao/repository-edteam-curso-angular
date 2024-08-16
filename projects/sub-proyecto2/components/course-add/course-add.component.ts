import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-add',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="container-md ">
      <div class="row justify-content-center align-items-center">
        <div class="col-6">
          <div class="card mt-4">
            <div class="card-header">Nuevo Curso</div>
            <div class="card-body">
              <form #fomrAdd="ngForm">
                <div class=" form-group mb-3">
                  <label for="name" class="form-label">Nombre</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    aria-describedby="emailHelp"
                    name="name"
                    [(ngModel)]="nombre"
                    #name="ngModel"
                    required
                  />
                </div>
                <div class=" form-group mb-3">
                  <label for="price" class="form-label">Precio</label>
                  <input
                    type="number"
                    class="form-control"
                    id="price"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class=" form-group mb-3">
                  <label for="imageUrl" class="form-label">Url de imagen</label>
                  <input
                    type="text"
                    class="form-control"
                    id="imageUrl"
                    aria-describedby="emailHelp"
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
              <div>
                <pre>
              Form.valid:{{ fomrAdd.form.valid }}
              Form.invalid:{{ fomrAdd.form.invalid }}
            </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class CourseAddComponent {
  nombre: string ='';
  constructor(){

  }

}
