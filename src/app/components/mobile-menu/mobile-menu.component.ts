import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Translations } from '../../services/language.service';

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
  @Input() translations: Translations | null = null;
  @Output() menuToggle = new EventEmitter<void>();
  @Output() languageChange = new EventEmitter<string>();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.isOpen && isPlatformBrowser(this.platformId)) {
      this.closeMenu();
    }
  }

  toggleMenu(): void {
    this.menuToggle.emit();
  }

  closeMenu(): void {
    if (this.isOpen) {
      this.menuToggle.emit();
    }
  }

  switchLanguage(language: string): void {
    this.languageChange.emit(language);
  }
}
