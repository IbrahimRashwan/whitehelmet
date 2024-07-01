import { Component, InputSignal, Signal, inject, input } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { MatDividerModule} from '@angular/material/divider';
import { MatListModule} from '@angular/material/list';
import { IPost } from '@modules/post/models/post.model';
import { PostService } from '@modules/post/services/post.service';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { PostCardComponent } from '../post-card/post-card.component';
import { Observable } from 'rxjs/internal/Observable';
import { finalize } from 'rxjs/internal/operators/finalize';
import { CommentCardComponent } from './comment-list/comment-card/comment-card.component';
import { CommentListComponent } from './comment-list/comment-list.component';

@Component({
  selector: 'app-view-post',
  standalone: true,
  imports: [
    PostCardComponent,
    CommentListComponent
  ],
  templateUrl: './view-post.component.html',
  styleUrl: './view-post.component.scss'
})
export default class ViewPostComponent {
  id:InputSignal<number> = input.required();
  #postService: PostService = inject(PostService);
  isLoading: boolean = true;
  postDetails: Signal<IPost> = toSignal(toObservable(this.id).pipe(
    switchMap((id) => this.getDetails(id))
  ));

  getDetails(id:number):Observable<any> {
    return this.#postService.getDetailsWithComments(id)
    .pipe(
      finalize(() => this.isLoading = false)
    )
  }
}
