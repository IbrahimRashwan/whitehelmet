import { Component, InputSignal, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { IPost } from '@modules/post/models/post.model';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss'
})
export class PostCardComponent {
  fullHeight: InputSignal<boolean> = input(true);
  post: InputSignal<IPost> = input.required();
}
