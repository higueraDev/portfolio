import { Injectable } from '@angular/core';
import { doc, docData, Firestore, updateDoc } from '@angular/fire/firestore';
import { Like } from '../models/entities/like';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserInteractionsService {
  constructor(private readonly firestore: Firestore) {}

  getLikes() {
    const likesDocumentReference = doc(this.firestore, 'likes/likesId');
    return docData(likesDocumentReference, {
      idField: 'id',
    }) as Observable<Like>;
  }

  postLike(likes: number) {
    const likesDocumentReference = doc(
      this.firestore,
      `likes/likesId`
    );
    return updateDoc(likesDocumentReference, { count: likes });
  }
}
