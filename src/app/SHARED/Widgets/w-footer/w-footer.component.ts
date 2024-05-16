import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'w-footer',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './w-footer.component.html',
  styleUrl: './w-footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WFooterComponent { }
