import { Component, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService, Translations } from '../../services/language.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  translations: Translations | null = null;

  constructor(private languageService: LanguageService) {
    effect(() => {
      this.translations = this.languageService.translations();
    });
  }
}
