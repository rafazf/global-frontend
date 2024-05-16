import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Observable } from 'rxjs';
import { IEmployeeResponse } from '../../interfaces/employee';
import { ToastrService } from 'ngx-toastr';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'consultation',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './consultation.component.html',
  styleUrl: './consultation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsultationComponent { 
  employeService = inject(EmployeeService);
  toastr = inject(ToastrService);
  cdf=inject(ChangeDetectorRef);
  $dataAllEmployees:Observable<IEmployeeResponse[]>;
  showModal:boolean=false;
  idEmployee:number=0;
  constructor() {
    this.$dataAllEmployees = this.employeService.getEmployees();
  }

  deletedEmployee(){
    this.employeService.deleteEmployee(this.idEmployee).subscribe((d)=>{
      this.toastr.success(d.message);
      this.$dataAllEmployees = this.employeService.getEmployees();
      this.closeModal();
      this.cdf.detectChanges();
    });

  }
  closeModal(){
    this.showModal = false;
  }
  openModal(id_empleado:number){
    this.showModal = true;
    this.idEmployee = id_empleado;
  }
  //Mensaje de éxito
  showsuccess(msg:string) {
    this.toastr.success(msg, 'Success');
  }
}
