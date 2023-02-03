import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Observable, switchMap, take } from 'rxjs';
import { Like } from '../../../models/entities/like';
import { UserInteractionsService } from '../../../services/user-interactions.service';
import { StoreService } from '../../../services/store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleMenu = new EventEmitter<string>();
  public like$: Observable<Like>;
  public menuOpened$: Observable<boolean>;

  constructor(
    private readonly userInteraction: UserInteractionsService,
    private readonly store: StoreService
  ) {}

  ngOnInit() {
    this.menuOpened$ = this.store.readMenuState();
    this.like$ = this.userInteraction.getLikes();
  }

  onMenuClick() {
    this.toggleMenu.emit('toggleMenu')
    this.menuOpened$.pipe(take(1)).subscribe((state) => {
      this.store.setMenuState(!state);
    });
  }

  onLike() {
    this.like$
      .pipe(
        take(1),
        switchMap((likes) => this.userInteraction.postLike(likes.count + 1))
      )
      .subscribe();
  }
}
