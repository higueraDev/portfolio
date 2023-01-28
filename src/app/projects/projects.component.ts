import { Component, ElementRef, ViewChild } from '@angular/core';
import { Project } from '../models/entities/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  @ViewChild('main') main!: ElementRef<HTMLElement>;

  public sectionActive: number = 0;

  public projects: Project[] = [];

  ngOnInit() {
    this.projects = [
      {
        title: 'Rick & Morty - Javascript Vanilla',
        githubLink: 'https://github.com/higueraDev',
        link: 'https://higueradev.github.io/skill-test/',
        image: 'rick_and_morty'
      },
      {
        title: 'Star Wars - Angular',
        githubLink: 'https://github.com/higueraDev/starwars-wiki',
        link: 'https://angular-store-22e59.web.app/',
        image: 'star_wars'
      },
      {
        title: 'Map Directions - Vue 3',
        githubLink: 'https://github.com/higueraDev/vue-map',
        link: 'https://mapbox-sample.netlify.app/#/',
        image: 'map_directions'
      },
    ];
  }

  get viewHeight() {
    return window.visualViewport?.height || 0;
  }

  get position() {
    return this.main?.nativeElement.scrollTop || 0;
  }

  onScroll() {
    this.sectionActive = this.position / this.viewHeight;
  }
}
