import { Component, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService, Translations } from '../../services/language.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  translations: Translations | null = null;

  constructor(private languageService: LanguageService) {
    effect(() => {
      this.translations = this.languageService.translations();
    });
  }
}
