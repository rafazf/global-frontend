import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Observable } from 'rxjs';
import { IEmployeeResponse } from '../../interfaces/employee';
@Component({
  selector: 'consultation',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './consultation.component.html',
  styleUrl: './consultation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsultationComponent { 
  employedService = inject(EmployeeService);
  $dataAllEmployees:Observable<IEmployeeResponse[]>;
  constructor() {
    this.$dataAllEmployees = this.employedService.getEmployees();
  }
}
