import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private menuOpened$ = new BehaviorSubject<boolean>(false)

  setMenuState(value:boolean){
    this.menuOpened$.next(value)
  }

  readMenuState(){
    return this.menuOpened$.asObservable()
  }
}
