import { Component, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  translations: any;

  constructor(private languageService: LanguageService) {
    effect(() => {
      this.translations = this.languageService.translations();
    });
  }
}