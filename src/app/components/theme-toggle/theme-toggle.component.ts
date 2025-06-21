import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      class="theme-toggle"
      type="button"
      (click)="theme.toggle()"
      [attr.aria-label]="theme.current === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'">
      <i class="theme-toggle__icon" [ngClass]="theme.current === 'dark' ? 'fas fa-moon' : 'fas fa-sun'"></i>
    </button>
  `,
  styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent {
  constructor(public theme: ThemeService) {}
} 