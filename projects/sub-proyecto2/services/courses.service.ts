import { Injectable } from '@angular/core';
import { cursos } from '../src/app/data/courses';
import { Observable } from 'rxjs';
import { Curso } from '../interfaces/curso';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpCliente : HttpClient) { }
  // constructor() { }

  getCourses():Observable<Curso[]> {
    return this.httpCliente.get<Curso[]>('assets/api/courses/courses.json');
  }
  // getCourses(){
  //   return cursos;
  // }
}
