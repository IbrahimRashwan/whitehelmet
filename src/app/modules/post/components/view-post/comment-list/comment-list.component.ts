import { Component, InputSignal, input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { IComment } from '@modules/post/models/comment.model';
import { CommentCardComponent } from './comment-card/comment-card.component';

@Component({
  selector: 'app-comment-list',
  standalone: true,
  imports: [
    MatDividerModule,
    MatListModule,
    CommentCardComponent
  ],
  templateUrl: './comment-list.component.html',
  styleUrl: './comment-list.component.scss'
})
export class CommentListComponent {
  comments:InputSignal<IComment[] | undefined> = input();
}
