import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CorreoService {

  constructor() { }

  generarCorreoElectronico(primerNombre: string, primerApellido: string, id: number, pais: string): string {
    // Normalizamos los nombres y apellidos
    const primerNombreNormalizado = this.normalizarNombre(primerNombre);
    const primerApellidoNormalizado = this.normalizarApellido(primerApellido);

    // Generamos el nombre base del correo electrónico
    let nombreBase = `${primerNombreNormalizado}.${primerApellidoNormalizado}`;

    // Agregamos el ID si es mayor que 0
    if (id > 0) {
      nombreBase += `.${id}`;
    }

    // Obtener el dominio según el país
    const dominio = (pais === 'Colombia') ? 'global.com.co' : 'global.com.us';

    // Generar el correo electrónico completo
    const correoElectronico = `${nombreBase}@${dominio}`;

    return correoElectronico;
  }

  // Función para normalizar nombres
  private normalizarNombre(nombre: string): string {
    // Convertir a minúsculas y eliminar espacios en blanco
    return nombre.toLowerCase().replace(/\s+/g, '');
  }

  // Función para normalizar apellidos
  private normalizarApellido(apellido: string): string {
    // Convertir a minúsculas, eliminar espacios en blanco y separadores
    return apellido.toLowerCase().replace(/\s+/g, '').replace(/\-/g, '');
  }

}
