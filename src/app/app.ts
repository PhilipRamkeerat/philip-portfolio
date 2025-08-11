import { Component, OnInit, Inject, PLATFORM_ID, signal, effect } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { LanguageService, Language } from './services/language.service';
import { ThemeService } from './services/theme.service';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, MobileMenuComponent, ThemeToggleComponent]
})
export class App implements OnInit {
  protected title = 'Philip Ramkeerat - Senior Angular Developer';
  protected currentLanguage: Language = 'en';
  protected translations: any;
  protected isMobileMenuOpen = signal(false);
  protected currentYear: number = new Date().getFullYear();

  constructor(
    private languageService: LanguageService,
    private themeService: ThemeService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    effect(() => {
      this.currentLanguage = this.languageService.language();
      this.translations = this.languageService.translations();
    });
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      import('aos').then((AOS) => {
        AOS.default.init({
          duration: 1000,
          once: true,
          offset: 100
        });
      });
    }
  }

  switchLanguage(language: Language): void {
    this.languageService.setLanguage(language);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(open => !open);
  }

  onMobileLanguageChange(language: string): void {
    this.switchLanguage(language as Language);
  }
}
