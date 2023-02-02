import { Injectable } from '@angular/core';
import { Project } from '../models/entities/project';
import {
  collection,
  CollectionReference,
  DocumentData,
} from '@firebase/firestore';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private projectCollection: CollectionReference<DocumentData>;

  constructor(private readonly firestore: Firestore) {
    this.projectCollection = collection(firestore, 'projects');
  }

  getProjects() {
    return collectionData(this.projectCollection, {
      idField: 'id',
    }) as Observable<Project[]>
  }
}
