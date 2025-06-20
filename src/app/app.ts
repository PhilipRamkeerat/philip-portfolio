import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { LanguageService, Language } from './services/language.service';
import { ThemeService, Theme } from './services/theme.service';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, MobileMenuComponent]
})
export class App implements OnInit {
  protected title = 'Philip Ramkeerat - Senior Angular Developer';
  protected currentLanguage: Language = 'en';
  protected translations: any;
  protected isMobileMenuOpen = false;
  protected currentTheme: Theme = 'dark';

  constructor(
    private languageService: LanguageService,
    private themeService: ThemeService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
      this.translations = this.languageService.getTranslations();
    });
    this.themeService.currentTheme$.subscribe(theme => {
      this.currentTheme = theme;
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
      if (!document.documentElement.getAttribute('data-theme')) {
        this.themeService.setTheme('dark');
      }
    }
  }

  switchLanguage(language: Language): void {
    this.languageService.setLanguage(language);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  onMobileLanguageChange(language: string): void {
    this.switchLanguage(language as Language);
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
