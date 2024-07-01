import { Routes } from '@angular/router';

export const budgetRoutes: Routes = [
  { path:'', loadComponent: () => import("./components/budget.component")},
];
