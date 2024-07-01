import { Routes } from '@angular/router';
import { LayoutContentComponent } from './components/layout-content.component';
import { postRoutes } from '@modules/post/post.routes';
import { budgetRoutes } from '@modules/budget/budget.routes';
import { teamRoutes } from '@modules/team/team.routes';

export const layoutRoutes: Routes = [
  {
    path:'',
    component: LayoutContentComponent,
    children:[
      { path:'', loadComponent: () => import("@modules/dashboard/components/dashboard.component")},
      { path:'budget', children:budgetRoutes},
      { path:'team', children:teamRoutes},
      { path:'post', children:postRoutes}
    ]
  }
];
