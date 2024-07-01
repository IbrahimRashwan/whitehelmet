import { Routes } from '@angular/router';

export const teamRoutes: Routes = [
  { path:'', loadComponent: () => import("./components/team.component")},
];
