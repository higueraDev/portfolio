import { angularIcon } from './svgs/angularIcon';
import { githubIcon } from './svgs/githubIcon';
import { linkedinIcon } from './svgs/linkedinIcon';
import { twitterIcon } from './svgs/twitterIcon';
import { sassIcon } from './svgs/sassIcon';
import { htmlIcon } from './svgs/htmlIcon';
import { cssIcon } from './svgs/cssIcon';
import { javascriptIcon } from './svgs/javascriptIcon';
import { typescriptIcon } from './svgs/typescriptIcon';
import { reactIcon } from './svgs/reactIcon';
import { rustIcon } from './svgs/rustIcon';
import { vueIcon } from './svgs/vueIcon';
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
    angular: angularIcon ,
    github: githubIcon ,
    linkedin: linkedinIcon ,
    twitter: twitterIcon ,
    sass: sassIcon ,
    html: htmlIcon ,
    css: cssIcon ,
    javascript: javascriptIcon ,
    typescript: typescriptIcon ,
    react: reactIcon ,
    rust: rustIcon ,
    vue: vueIcon
  };

  ngAfterViewInit() {
    this.svg.nativeElement.style.width = this.width
    this.svg.nativeElement.style.height = this.width
    this.svg.nativeElement.style.fill = this.color
    this.svg.nativeElement.innerHTML = this.icons[this.name];
  }
}
