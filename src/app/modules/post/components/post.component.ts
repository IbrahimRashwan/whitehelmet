import { Component, Signal, inject } from '@angular/core';
import { PostService } from '../services/post.service';
import { IPost } from '../models/post.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { PostCardComponent } from './post-card/post-card.component';
import { RouterLink } from '@angular/router';
import { finalize } from 'rxjs/internal/operators/finalize';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    PostCardComponent,
    RouterLink
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export default class PostComponent {
  #postService: PostService = inject(PostService);
  isLoading: boolean = true;
  posts: Signal<IPost[] | undefined> = toSignal(
    this.#postService.getList().pipe(finalize(() => this.isLoading = false))
  );
}
