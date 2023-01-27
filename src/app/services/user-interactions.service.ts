import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserInteractionsService {
  constructor(private http: HttpClient) {}

  postLike(likes: number) {
    return this.http
      .patch('https://portfolio-a9c2c-default-rtdb.firebaseio.com/.json', {
        likes,
      })
  }

  getLikes() {
    return this.http.get<number>(
      'https://portfolio-a9c2c-default-rtdb.firebaseio.com/likes.json'
    );
  }
}
