import { Component,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @Output()scroll = new EventEmitter()

  onScroll(){
    this.scroll.emit()
  }
}
