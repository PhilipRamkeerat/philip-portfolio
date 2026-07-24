import { Routes } from '@angular/router';

/**
 * The portfolio is a single-page experience: every section lives on '/'
 * and navigation happens via anchor scrolling. Legacy multi-page URLs
 * (/about, /skills, …) are redirected to the root for backwards
 * compatibility with old links and search-engine entries.
 */
export const routes: Routes = [
  { path: '', children: [] },
  { path: '**', redirectTo: '' },
];
