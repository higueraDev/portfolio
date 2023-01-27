import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {
  @Input()name: string = ''

  get localSource(){
    return 'assets/images/' + this.name + '.jpeg'
  }

}