import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  @ViewChild('main') main!: ElementRef<HTMLElement>;

  public sectionActive: number = 0;

  get viewHeight() {
    return (window.visualViewport?.height || 0) - 64;
  }

  get position() {
    return this.main?.nativeElement.scrollTop || 0;
  }

  scroll() {
    this.main.nativeElement.scrollTo({
      top: this.viewHeight,
      left: 0,
      behavior: 'smooth',
    });
  }

  onScroll() {
    this.sectionActive =  this.position / this.viewHeight;
  }
}
