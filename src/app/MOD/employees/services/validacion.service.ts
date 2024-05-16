import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidacionService {

  constructor() { }

  validarPrimerApellido(apellido: string): boolean {
    return /^[A-Z]{1}[A-Z\s]{0,19}$/.test(apellido);
  }

  validarSegundoApellido(apellido: string): boolean {
    return /^[A-Z]{1}[A-Z\s]{0,19}$/.test(apellido);
  }

  validarPrimerNombre(nombre: string): boolean {
    return /^[A-Z]{1}[A-Z\s]{0,19}$/.test(nombre);
  }

  validarOtrosNombres(nombres: string): boolean {
    return /^[A-Z\s]{0,50}$/.test(nombres);
  }

}
