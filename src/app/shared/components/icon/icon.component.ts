import { angularIcon } from './svgs/angularIcon';
import { githubIcon } from './svgs/githubIcon';
import { linkedinIcon } from './svgs/linkedinIcon';
import { twitterIcon } from './svgs/twitterIcon';
import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

interface Icon {
  [x: string]: string;
}

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.svg',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements AfterViewInit {
  @Input() name: string = 'angularIcon';
  @Input() width: string = '20px';
  @Input() color: string = "white";
  @ViewChild('svg') svg!: ElementRef<HTMLElement>;


  private icons: Icon = {
    angularIcon,
    githubIcon,
    linkedinIcon,
    twitterIcon
  };

  ngAfterViewInit() {
    this.svg.nativeElement.style.width = this.width
    this.svg.nativeElement.style.height = this.width
    this.svg.nativeElement.style.fill = this.color
    this.svg.nativeElement.innerHTML = this.icons[this.name];
  }
}
