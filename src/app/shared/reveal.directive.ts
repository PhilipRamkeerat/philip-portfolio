import { DestroyRef, Directive, ElementRef, afterNextRender, inject, input, numberAttribute } from '@angular/core';

/**
 * Progressive scroll-reveal without any third-party library.
 *
 * SSR-safe by design: the hidden state is only applied in the browser, so
 * server-rendered HTML paints fully visible content (good for LCP and for
 * users without JavaScript). Once hydrated, elements below the fold animate
 * in as they enter the viewport. `prefers-reduced-motion` is honored in CSS.
 */
@Directive({ selector: '[appReveal]' })
export class RevealDirective {
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);

  /** Optional stagger delay in milliseconds. */
  readonly revealDelay = input(0, { transform: numberAttribute });

  constructor() {
    afterNextRender(() => this.observe());
  }

  private observe(): void {
    const element = this.elementRef.nativeElement;

    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    element.classList.add('reveal');
    if (this.revealDelay() > 0) {
      element.style.setProperty('--reveal-delay', `${this.revealDelay()}ms`);
    }

    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          element.classList.add('reveal--visible');
          obs.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(element);
    this.destroyRef.onDestroy(() => observer.disconnect());
  }
}
