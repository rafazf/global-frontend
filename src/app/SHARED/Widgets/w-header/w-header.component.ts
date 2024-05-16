import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
@Component({
  selector: 'w-header',
  standalone: true,
  imports: [
    CommonModule,RouterLink,RouterLinkActive
  ],
  templateUrl: './w-header.component.html',
  styleUrl: './w-header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WHeaderComponent { }
