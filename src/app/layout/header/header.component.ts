import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  PLATFORM_ID,
  afterNextRender,
  effect,
  inject,
  signal,
} from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { ThemeService } from '../../core/theme.service';
import { Language } from '../../core/translations';
import { IconComponent } from '../../shared/icon.component';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  host: {
    '(document:keydown.escape)': 'closeMenu()',
  },
})
export class HeaderComponent {
  private readonly languageService = inject(LanguageService);
  private readonly themeService = inject(ThemeService);
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  protected readonly t = this.languageService.t;
  protected readonly language = this.languageService.language;
  protected readonly isDark = this.themeService.isDark;

  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);
  protected readonly progress = signal(0);
  protected readonly activeSection = signal('');

  constructor() {
    afterNextRender(() => {
      this.trackScroll();
      this.trackActiveSection();
    });

    // Lock body scroll while the mobile menu overlay is open.
    effect(() => {
      if (this.isBrowser) {
        this.document.body.style.overflow = this.menuOpen() ? 'hidden' : '';
      }
    });
  }

  protected setLanguage(language: Language): void {
    this.languageService.setLanguage(language);
  }

  protected toggleTheme(): void {
    this.themeService.toggle();
  }

  protected toggleMenu(): void {
    this.menuOpen.update(open => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  private trackScroll(): void {
    const window = this.document.defaultView;
    if (!window) {
      return;
    }

    const onScroll = (): void => {
      const scrollTop = window.scrollY;
      const max = this.document.documentElement.scrollHeight - window.innerHeight;
      this.scrolled.set(scrollTop > 8);
      this.progress.set(max > 0 ? Math.min(scrollTop / max, 1) : 0);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    this.destroyRef.onDestroy(() => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    });
  }

  private trackActiveSection(): void {
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    const sections = Array.from(this.document.querySelectorAll<HTMLElement>('main section[id]'));
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
          }
        }
      },
      // Active when a section crosses the band around the upper-middle of the viewport.
      { rootMargin: '-30% 0px -60% 0px' },
    );

    sections.forEach(section => observer.observe(section));
    this.destroyRef.onDestroy(() => observer.disconnect());
  }
}
