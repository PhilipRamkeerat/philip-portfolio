import { Injectable, Inject, PLATFORM_ID, Renderer2, RendererFactory2 } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { signal, effect } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private renderer: Renderer2;

  /**
   * Reactive theme signal. Whenever its value changes the HTML `data-theme`
   * attribute is updated automatically and the preference is persisted in
   * `localStorage` (browser only).
   */
  private readonly _theme = signal<Theme>('dark');
  readonly theme = this._theme.asReadonly();

  constructor(
    rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);

    // Restore saved preference (browser-side only)
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('theme') as Theme | null;
      if (saved === 'light' || saved === 'dark') {
        this._theme.set(saved);
      }
    }

    // Side-effect: keep DOM & localStorage in sync with current signal value
    effect(() => {
      const current = this._theme();
      if (isPlatformBrowser(this.platformId)) {
        this.renderer.setAttribute(this.document.documentElement, 'data-theme', current);
        localStorage.setItem('theme', current);
      }
    });
  }

  /** Convenience accessor for the current value */
  get current(): Theme {
    return this._theme();
  }

  /** Explicitly set the theme */
  set(theme: Theme): void {
    this._theme.set(theme);
  }

  /** Toggle between `light` and `dark` */
  toggle(): void {
    this._theme.set(this._theme() === 'dark' ? 'light' : 'dark');
  }
} 