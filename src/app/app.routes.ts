import { Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/errors/not-found/not-found.component';
import { layoutRoutes } from './layout/layout.routes';

export const routes: Routes = [
  ...layoutRoutes,
  { path:'**', component: NotFoundComponent}
];
