import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then(m => m.Home)
  },
  {
    path: 'catalog',
    loadComponent: () => import('./pages/catalog/catalog').then(m => m.Catalog)
  },
  {
    path: 'companies',
    loadComponent: () => import('./pages/companies/companies').then(m => m.Companies)
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects').then(m => m.Projects)
  },
  {
    path: 'believe',
    loadComponent: () => import('./pages/believe/believe').then(m => m.Believe)
  },
  {
    path: 'people',
    pathMatch: 'full',
    redirectTo: 'people/ash'
  },
  {
    path: 'people/ash',
    loadComponent: () => import('./pages/people/people-ash').then(m => m.PeopleAsh)
  },
  {
    path: 'people/noushin',
    loadComponent: () => import('./pages/people/people-noushin').then(m => m.PeopleNoushin)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
