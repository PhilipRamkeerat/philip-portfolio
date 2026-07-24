import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';
import { LanguageService } from './core/language.service';
import { ThemeService } from './core/theme.service';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideZonelessChangeDetection(), provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render header brand and all portfolio sections', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.brand')?.textContent).toContain('Philip');
    for (const id of ['hero', 'about', 'skills', 'experience', 'projects', 'contact']) {
      expect(compiled.querySelector(`section#${id}`)).withContext(`section #${id}`).toBeTruthy();
    }
  });

  it('should switch content language through the language service', () => {
    const fixture = TestBed.createComponent(App);
    const language = TestBed.inject(LanguageService);

    language.setLanguage('pt');
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.nav__link')?.textContent?.trim()).toBe('Sobre');
  });

  it('should toggle the theme attribute on the document element', () => {
    TestBed.createComponent(App);
    const theme = TestBed.inject(ThemeService);
    const initial = theme.theme();

    theme.toggle();
    TestBed.tick();

    expect(theme.theme()).not.toBe(initial);
    expect(document.documentElement.getAttribute('data-theme')).toBe(theme.theme());
  });
});
