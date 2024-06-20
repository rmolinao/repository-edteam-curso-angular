import { Routes } from '@angular/router';
import { CourseEditComponent } from '../../components/course-edit/course-edit.component';
import { CursosComponent } from '../../components/cursos/cursos.component';

export const routes: Routes = [
    {path:'', component:CursosComponent},
    {path:'course/:id', component:CourseEditComponent},
];
