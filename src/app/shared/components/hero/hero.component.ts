import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  @Input()
  set title(newTitle: string) {
    this.newTitle = newTitle
    this.titleLength = newTitle.length;
  }

  @Output() scroll = new EventEmitter();

  public newTitle:string = ''
  public titleLength: number = 0;


  onScroll() {
    this.scroll.emit();
  }
}
