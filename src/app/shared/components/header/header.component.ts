import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { UserInteractionsService } from '../../../services/user-interactions.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleMenu = new EventEmitter<string>();
  public likes: number = 0;

  constructor(private userInteraction: UserInteractionsService) {}

  ngOnInit() {
    this.readLikes();
  }

  onMenuClick() {
    this.toggleMenu.emit('toggleMenu');
  }

  onLike() {
    this.userInteraction.postLike(this.likes + 1).subscribe(()=>{
      this.readLikes()
    });
  }

  readLikes() {
    this.userInteraction.getLikes().subscribe((data: number) => {
      this.likes = data;
    });
  }
}
