import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { IEmployeeResponse, IEmployeeReq,IEmployeeRes } from '../interfaces/employee';
import { environment } from '../../../../environments/environment';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private URL:string = environment.URL_BASE;
  httpClient = inject(HttpClient);
  

  constructor() { }
  //Método para obtener todos los empleados
  getEmployees():Observable<IEmployeeResponse[]> {
    return this.httpClient.get<IEmployeeResponse[]>(`${this.URL}/employees`)
    .pipe(catchError(this.handleError));
  }
  //Método para registrar a un empleado
  registerEmployee(employee: IEmployeeReq):Observable<IEmployeeRes> {
    return this.httpClient.post<IEmployeeRes>(`${this.URL}/employees`, employee).pipe(catchError(this.handleError));;
  }
  //Método para eliminar un empleado
  deleteEmployee(id:number):Observable<IEmployeeRes>{
    return this.httpClient.delete<IEmployeeRes>(`${this.URL}/employees/${id}`).pipe(catchError(this.handleError));
  }
  //Método para mostrar algun error
  private handleError(error:HttpErrorResponse){
    if(error.status === 0){
      console.log('An error has occurred', error.error);
    }else{
      console.log('Backend status code', error.status, error.error)
    }
    return throwError(()=>new Error('Something failed, try again.'))
  }
}
