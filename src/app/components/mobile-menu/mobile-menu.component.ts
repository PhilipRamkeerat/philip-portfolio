import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent {
  @Input() isOpen = false;
  @Input() currentLanguage = 'en';
  @Input() translations: any;
  @Output() menuToggle = new EventEmitter<void>();
  @Output() languageChange = new EventEmitter<string>();

  toggleMenu(): void {
    this.menuToggle.emit();
  }

  closeMenu(): void {
    this.menuToggle.emit();
  }

  switchLanguage(language: string): void {
    this.languageChange.emit(language);
  }
} 