import { Component, Signal, inject, OnInit, signal, WritableSignal, DestroyRef} from '@angular/core';
import { PostService } from '../services/post.service';
import { IPost } from '../models/post.model';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { PostCardComponent } from './post-card/post-card.component';
import { RouterLink } from '@angular/router';
import { finalize } from 'rxjs/internal/operators/finalize';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { map } from 'rxjs/internal/operators/map';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    PostCardComponent,
    RouterLink,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export default class PostComponent implements OnInit {
  #postService: PostService = inject(PostService);
  #destroyRef: DestroyRef = inject(DestroyRef);
  isLoading: boolean = true;
  keywordFormControl = new FormControl();
  filteredPosts: WritableSignal<IPost[] | undefined> = signal([]);
  posts: Signal<IPost[] | undefined> = toSignal(
    this.#postService.getList().pipe(finalize(() => this.isLoading = false))
    .pipe(map(posts => {
      this.filteredPosts.set(posts);
      return posts
    }))
  );

  ngOnInit():void {
    this.onKeywordFormControlChange();
  }

  onKeywordFormControlChange():void {
    this.keywordFormControl.valueChanges
    .pipe(debounceTime(500), takeUntilDestroyed(this.#destroyRef))
    .subscribe( keyword => this.filteredPosts.set(this.getFiltredPosts(keyword)))
  }

  getFiltredPosts(keyword:string):IPost[] {
    if(keyword?.length){
      const KEYWORD_FORMATTED = keyword?.toLocaleLowerCase();
      return this.posts()?.filter(post => {
        // i make extra vars to make my code readable
        const BODY = post.body?.toLowerCase();
        const TITLE = post.body?.toLowerCase();
        return BODY?.includes(KEYWORD_FORMATTED) || TITLE?.includes(KEYWORD_FORMATTED);
      })!
    } else {
      return this.posts()!
    }
  }

}
