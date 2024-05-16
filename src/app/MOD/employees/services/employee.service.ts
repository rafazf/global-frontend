import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployeeResponse, IEmployeeReq,IEmployeeRes } from '../interfaces/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private URL_BASE = 'http://127.0.0.1:8000/api';
  httpClient = inject(HttpClient);

  constructor() { }
  //Método para obtener todos los empleados
  getEmployees():Observable<IEmployeeResponse[]> {
    return this.httpClient.get<IEmployeeResponse[]>(`${this.URL_BASE}/employees`);
  }
  //Método para registrar a un empleado
  registerEmployee(employee: IEmployeeReq):Observable<IEmployeeRes> {
    return this.httpClient.post<IEmployeeRes>(`${this.URL_BASE}/employees`, employee);
  }
}
