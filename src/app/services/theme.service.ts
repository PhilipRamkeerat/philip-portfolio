import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private theme$ = new BehaviorSubject<Theme>('dark');

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme') as Theme;
      if (savedTheme === 'dark' || savedTheme === 'light') {
        this.setTheme(savedTheme);
      } else {
        this.setTheme('dark'); // Default to dark
      }
    }
  }

  get currentTheme$() {
    return this.theme$.asObservable();
  }

  setTheme(theme: Theme) {
    this.theme$.next(theme);
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
  }

  toggleTheme() {
    const newTheme: Theme = this.theme$.value === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }

  getCurrentTheme(): Theme {
    return this.theme$.value;
  }
} 