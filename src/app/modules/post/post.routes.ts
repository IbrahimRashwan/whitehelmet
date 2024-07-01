import { Routes } from '@angular/router';
import { PostService } from './services/post.service';

export const postRoutes: Routes = [
  {
    path:'',
    providers:[PostService],
    children:[
      { path:'', loadComponent: () => import("./components/post.component")},
      { path:':id', loadComponent: () => import("./components/view-post/view-post.component")},
    ]
  }
];
