import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule,FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { IEmployeeReq } from '../../interfaces/employee';
import { ValidacionService } from '../../services/validacion.service';
import { MayusDirective } from '../../../others/mayus.directive';
import { NumeroIdDirective } from '../../../others/numeroId.directive';
import { FechaInDirective } from '../../../others/fechaIn.directive';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'registration',
  standalone: true,
  imports: [
    CommonModule,ReactiveFormsModule,MayusDirective,NumeroIdDirective,FechaInDirective
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent { 
  employeeService = inject(EmployeeService)
  fb = inject(FormBuilder)
  validacionService = inject(ValidacionService);
  toastr = inject(ToastrService)
  tipoIdentificacion=['Cédula de Ciudadanía','Cédula de Extranjería','Pasaporte','Permiso Especial']
  paisEmpleo=['Colombia','Estados Unidos']
  area=['Administración','Financiera','Compras','Infraestructura','Operación','Talento Humano','Servicios Varios']
  constructor() {}
  employeeForm = this.fb.group({
    primer_apellido: ['', [Validators.required, Validators.maxLength(20)]],
    segundo_apellido: ['', [Validators.required, Validators.maxLength(20)]],
    primer_nombre: ['', [Validators.required, Validators.maxLength(20)]],
    otros_nombres: [''],
    tipo_identificacion: ['', [Validators.required, Validators.maxLength(50)]],
    numero_identificacion: ['', [Validators.required, Validators.maxLength(20)]],
    correo_electronico: ['', [Validators.required, Validators.email, Validators.maxLength(300)]],
    pais_empleo: ['', [Validators.required]],
    fecha_ingreso: ['', [Validators.required]],
    area: ['', [Validators.required, Validators.maxLength(50)]],
    estado: ['Activo']
  });
  
  onSubmit(): void {
    //Verificamos que el fomulario sea valido antes de enviar los datos
    if (this.employeeForm.valid) {
      // Enviar el formulario al servidor para crear el empleado
      this.employeeService.registerEmployee(this.employeeForm.value as IEmployeeReq).subscribe((d)=>{this.showsuccess(d.message);this.employeeForm.reset()})
    }
  }
  //Mensaje de éxito
  showsuccess(msg:string) {
    this.toastr.success(msg, 'Success');
  }
  //Mensaje de error
  showerror(msg:string) {
    this.toastr.error(msg, 'Error');
  }
}
