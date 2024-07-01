import { Injectable, Signal, WritableSignal, computed, inject, signal } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IPost, IResponsePost } from '../models/post.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { IUser } from '@core/models/user.model';
import { IComment, IResponseComment } from '../models/comment.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/internal/operators/map';
import { combineLatest } from 'rxjs/internal/observable/combineLatest';
import { UsersService } from '@core/services/users.service';

@Injectable()

export class PostService {
  #http: HttpClient = inject(HttpClient);
  #usersService: UsersService = inject(UsersService);
  #users: WritableSignal<IUser[] | undefined> = this.#usersService.users;

  getUsers(): Observable<IUser[]>{
    return this.#http.get<IUser[]>(environment.apiUrl+'users');
  }

  getList(): Observable<IPost[]>{
    return this.#http.get<IResponsePost[]>(environment.apiUrl+'posts')
    .pipe(
      map(posts => this.getPostsWithUserDetails(posts))
    );
  }

  getPostsWithUserDetails(posts:IResponsePost[]):IPost[] {
    return posts.map(post => this.getPostWithUserDetails(post))
  }

  getPostWithUserDetails(post:IResponsePost):IPost {
    return {
      ...post,
      user: this.getUserByUserId(post.userId)!
    }
  }

  getUserByUserId(userId: number):IUser {
    return this.#users()?.find(user => user.id == userId)!;
  }

  getUserByEmail(email: string):IUser {
    return this.#users()?.find(user => user.email == email)!;
  }

  getDetails(postId: number): Observable<IResponsePost>{
    return this.#http.get<IPost>(environment.apiUrl+'posts/'+postId)
    .pipe(
      map((post) => this.getPostWithUserDetails(post))
    );
  }

  getDetailsWithComments(postId:number): Observable<any>{
    return combineLatest([
      this.getDetails(postId),
      this.getComments(postId)
    ])
    .pipe(
      map(([post, comments]) => {
        return {
          ...post,
          comments: comments!
        }
      })
    )
  }

  getComments(postId: number): Observable<IComment[]>{
    return this.#http.get<IComment[]>(environment.apiUrl+'comments',{params:{postId}})
    .pipe(
      map(comments => this.getCommentsWithUserDetails(comments))
    );
  }

  getCommentsWithUserDetails(comments:IResponseComment[]):IComment[] {
    return comments.map(comment => {
      return {
        ...comment,
        user: this.getUserByEmail(comment.email)!
      }
    })
  }



}
