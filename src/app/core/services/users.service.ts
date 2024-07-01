import { HttpClient } from '@angular/common/http';
import { Injectable, WritableSignal, inject, signal } from '@angular/core';
import { IUser } from '@core/models/user.model';
import { environment } from '@env/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({providedIn: 'root'})
export class UsersService {
  #http: HttpClient = inject(HttpClient);
  users: WritableSignal<IUser[]> = signal([]);

  getUsers(): Observable<IUser[]>{
    return this.#http.get<IUser[]>(environment.apiUrl+'users');
  }
}
