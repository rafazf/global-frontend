/**Interface de la respuesta al guardar un empleado */
export interface IEmployeeRes{
  message:string,
  employee:IEmployeeResponse
}
/**Interface de datos necesarios para almacenar al empleado */
export interface IEmployeeReq {
  primer_apellido: string;
  segundo_apellido: string;
  primer_nombre: string;
  otros_nombres: string | '';
  tipo_identificacion: string;
  numero_identificacion: string;
  correo_electronico: string;
  pais_empleo: string;
  fecha_ingreso: string;
  area: string;
  estado: string;
}
/**Interface de todos los datos del empleado */
export interface IEmployeeResponse {
  id_empleado: number;
  primer_apellido: string;
  segundo_apellido: string;
  primer_nombre: string;
  otros_nombres: string;
  tipo_identificacion: string;
  numero_identificacion: string;
  correo_electronico: string;
  pais_empleo: string;
  fecha_ingreso: string;
  area: string;
  estado: string;
  fecha_registro: string;
  created_at: string;
  updated_at: string;
}
