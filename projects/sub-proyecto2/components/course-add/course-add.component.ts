import { Component, ViewChild, ElementRef} from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Curso } from '../../interfaces/curso';

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
                    placeholder="Ingrese Nombre"
                    [(ngModel)]="model.name"
                    #name="ngModel"
                    required
                  />
                </div>
                <div class=" form-group mb-3">
                  <label for="name" class="form-label">Descripcion</label>
                  <input
                    type="text"
                    class="form-control"
                    id="descripttion"
                    aria-describedby="emailHelp"
                    name="descripttion"
                    placeholder="Descripcion"
                    [(ngModel)]="model.descripttion"
                    #descripttion="ngModel"
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
                    name="price"
                    placeholder="Precio"
                    [(ngModel)]="model.price"
                    #price="ngModel"
                    required
                  />
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
                    [(ngModel)]="model.img"
                    #imageUrl="ngModel"
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
                  class="btn btn-primary"
                  (click)="onSubmit()"
                  >
                  Crear Curso
                </button>
              </form>
              <div>
                <pre>
              <!-- con este estado varifico si el formulario es valido -->
              Form.valid:{{ fomrAdd.form.valid }}
              Form.invalid:{{ fomrAdd.form.invalid }}<!-- funcion inversa -->

              <!-- con este estado varifico si ha tocado o enfocado el formulario  -->
              Form.touched:{{ fomrAdd.form.touched }}
              Form.untouched:{{ fomrAdd.form.untouched }}<!-- funcion inversa -->

              <!-- con este estado varifico si ha  realizado cambios al formulario  -->
              Form.pristine:{{ fomrAdd.form.pristine }}
              Form.dirty:{{ fomrAdd.form.dirty }}<!-- funcion inversa -->

              <!-- importante solo se dectecta el cambio de estado en los input que asociados a ngModel -->

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
  model: Curso = {
    name: '',
    descripttion: '',
    price: 0,
    img: ''
  };

  @ViewChild('formAdd', { static: false }) formAdd!: ElementRef;
  form: FormControl = new FormControl();

  constructor() {

  }

  onSubmit(){
    console.log('onSubmit',this.form);
    if (this.form.valid) {
      console.log('model',this.model);
      this.form.reset();
    }
  }

}
