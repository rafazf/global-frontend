import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'edition',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './edition.component.html',
  styleUrl: './edition.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditionComponent { }
