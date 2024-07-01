import { Component, InputSignal, input } from '@angular/core';
import { MatListItem } from '@angular/material/list';
import { IComment } from '@modules/post/models/comment.model';

@Component({
  selector: 'app-comment-card',
  standalone: true,
  imports: [
    MatListItem
  ],
  templateUrl: './comment-card.component.html',
  styleUrl: './comment-card.component.scss'
})
export class CommentCardComponent {
  comment:InputSignal<IComment> = input.required();

}
