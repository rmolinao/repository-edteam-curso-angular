import { Injectable } from '@angular/core';
import { cursos } from '../src/app/data/courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getCourses(){
    return cursos;
  }
}
