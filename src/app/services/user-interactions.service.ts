import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserInteractionsService {
  constructor(private http: HttpClient) {}

  postLike(likes: number) {
    return this.http
      .patch(environment.apiURL + '/.json', {
        likes,
      })
  }

  getLikes() {
    return this.http.get<number>(
      environment.apiURL + '/likes.json'
    );
  }
}
