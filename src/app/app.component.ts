import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersService } from '@core/services/users.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'whitehelmet';
  #usersService: UsersService = inject(UsersService);

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers():void {
    this.#usersService.getUsers().subscribe(users => this.#usersService.users.set(users));

  }
}
