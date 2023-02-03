import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {
  @Input()name: string = ''
  @Input()width: string = '100%'
  @Input()height: string = '100%'

  get localSource(){
    return 'assets/images/' + this.name + '_xs.jpg'
  }

  get desktopSource(){
    return 'assets/images/' + this.name + '.jpeg'
  }

  get alt(){
    return this.name.replace('_',' ').toUpperCase()
  }

}
