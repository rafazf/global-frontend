import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WHeaderComponent } from '../../SHARED/Widgets/w-header/w-header.component';
import { WFooterComponent } from '../../SHARED/Widgets/w-footer/w-footer.component';

@Component({
  selector: 'employees',
  standalone: true,
  imports: [
    CommonModule,WHeaderComponent,WFooterComponent,RouterOutlet
  ],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesComponent { }
