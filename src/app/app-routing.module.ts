import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  {
    path: 'lazy-loaded',
    loadChildren: () => import('./lazy-loaded-module/lazy-loaded.module').then(m => m.LazyLoadedModule)
  },
  {
    path: 'lazy-loaded2',
    loadChildren: () => import('./lazy-loaded-module2/lazy-loaded2.module').then(m => m.LazyLoaded2Module)
  },
  {
    path: 'image-issue',
    loadChildren: () => import('./image-module/image-module.module').then(m => m.ImageModuleModule)
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      initialNavigation: 'enabledBlocking',
  })],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
