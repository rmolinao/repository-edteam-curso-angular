import { Routes } from '@angular/router';
import { CourseEditComponent } from '../../components/course-edit/course-edit.component';
import { CursosComponent } from '../../components/cursos/cursos.component';
import { CourseAddComponent } from '../../components/course-add/course-add.component';
import { CourseAddReactiveComponent } from '../../components/course-add-reactive/course-add-reactive.component';

export const routes: Routes = [
    {path:'', component:CursosComponent},
    {path:'course/edit/:id', component:CourseEditComponent},
    {path:'course/add', component:CourseAddComponent},
    {path:'course/add-reactive', component:CourseAddReactiveComponent}
];
