import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Observable, switchMap, take } from 'rxjs';
import { Like } from '../../../models/entities/like';
import { UserInteractionsService } from '../../../services/user-interactions.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleMenu = new EventEmitter<string>();
  public like$: Observable<Like>;
  public menuOpened: boolean = false

  constructor(private userInteraction: UserInteractionsService) {}

  ngOnInit() {
    this.like$ = this.userInteraction.getLikes();
  }

  onMenuClick() {
    this.menuOpened = !this.menuOpened
    this.toggleMenu.emit('toggleMenu');
  }

  onLike() {
    this.like$.pipe(
      take(1),
      switchMap((likes) => this.userInteraction.postLike(likes.count + 1))
    ).subscribe()
  }
}
