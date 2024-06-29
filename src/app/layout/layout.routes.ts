import { Routes } from '@angular/router';
import { LayoutContentComponent } from './components/layout-content.component';

export const layoutRoutes: Routes = [
  {
    path:'',
    component: LayoutContentComponent,
    children:[
      { path:'', loadComponent: () => import("@modules/dashboard/components/dashboard.component")},
      { path:'budget', loadComponent: () => import("@modules/budget/components/budget.component")},
      { path:'team', loadComponent: () => import("@modules/team/components/team.component")},
      { path:'post', loadComponent: () => import("@modules/post/components/post.component")}
    ]
  }
];
