import { Injectable } from '@angular/core';
import { cursos } from '../src/app/data/courses';
import { Observable, catchError, throwError } from 'rxjs';
import { Curso } from '../interfaces/curso';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpCliente : HttpClient) { }
  // constructor() { }

  getCourses():Observable<Curso[]> {
    return this.httpCliente.get<Curso[]>('assets/api/courses/courses.json')
      .pipe(
        catchError(this.manejarError)
      );
  }
  manejarError(error : HttpErrorResponse){
    if (error.error instanceof ErrorEvent) {
      console.log('Error en el Cliente ', error.status);
    }else{
      console.log('Error status: ',error.status);
      console.log('Error:',error.error);
    }
    // catch and rethrow
    return throwError('Hubo un problema al obtener los datos. Intenta mas tarde');
  }
  // getCourses(){
  //   return cursos;
  // }
}
