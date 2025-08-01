import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  translations: any;
  
  constructor(private languageService: LanguageService) {}
  
  ngOnInit() {
    this.translations = this.languageService.getTranslations();
    this.languageService.currentLanguage$.subscribe(() => {
      this.translations = this.languageService.getTranslations();
    });
  }
} 