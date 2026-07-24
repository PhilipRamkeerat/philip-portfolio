import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, computed, effect, inject, signal } from '@angular/core';
import { CONTENT, Language, PortfolioContent } from './translations';

const STORAGE_KEY = 'language';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  private readonly _language = signal<Language>('en');

  /** Current language ('en' | 'pt'). */
  readonly language = this._language.asReadonly();

  /** All localized content for the current language. */
  readonly t = computed<PortfolioContent>(() => CONTENT[this._language()]);

  constructor() {
    if (this.isBrowser) {
      this._language.set(this.resolveInitialLanguage());
    }

    effect(() => {
      const language = this._language();
      this.document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
      if (this.isBrowser) {
        localStorage.setItem(STORAGE_KEY, language);
      }
    });
  }

  setLanguage(language: Language): void {
    this._language.set(language);
  }

  private resolveInitialLanguage(): Language {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'pt') {
      return saved;
    }
    return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en';
  }
}
