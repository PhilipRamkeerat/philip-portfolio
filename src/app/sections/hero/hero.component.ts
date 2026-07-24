import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { IconComponent } from '../../shared/icon.component';
import { RevealDirective } from '../../shared/reveal.directive';

const MARQUEE_ITEMS = [
  'Angular',
  'TypeScript',
  'RxJS',
  'Signals',
  'NgRx',
  'Micro Frontends',
  'Module Federation',
  'SSR',
  'Nx',
  'Jest',
  'Cypress',
  'SCSS',
];

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, RevealDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  protected readonly t = inject(LanguageService).t;
  protected readonly marqueeItems = MARQUEE_ITEMS;

  /** Splits the localized role around "Angular" so only that word gets the gradient. */
  protected readonly roleParts = computed(() => {
    const [before = '', after = ''] = this.t().hero.role.split('Angular');
    return { before, after };
  });
}
