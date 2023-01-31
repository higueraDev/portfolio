import { Component, ElementRef, ViewChild } from '@angular/core';
import { Project } from '../models/entities/project';
import { Icon } from '../models/enums/icons';

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
        title: 'Rick & Morty',
        githubLink: 'https://github.com/higueraDev/skill-test',
        link: 'https://higueradev.github.io/skill-test/',
        image: 'rick_and_morty',
        icons: [Icon.JS, Icon.SASS, Icon.HTML]
      },
      {
        title: 'Star Wars',
        githubLink: 'https://github.com/higueraDev/starwars-wiki',
        link: 'https://angular-store-22e59.web.app/',
        image: 'star_wars',
        icons: [Icon.ANGULAR,Icon.TS, Icon.SASS, Icon.HTML ]
      },
      {
        title: 'Map Directions',
        githubLink: 'https://github.com/higueraDev/vue-map',
        link: 'https://mapbox-sample.netlify.app/#/',
        image: 'map_directions',
        icons: [Icon.VUE, Icon.TS, Icon.JS, Icon.HTML,]
      },
      {
        title: 'Who Is That Pokemon Game',
        githubLink: 'https://github.com/higueraDev/pokemon-game',
        link: 'https://master--wichpokemon.netlify.app',
        image: 'pokemon_game',
        icons: [Icon.VUE, Icon.JS,Icon.CSS,Icon.HTML,]
      },
    ];
  }

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
    this.sectionActive = this.position / this.viewHeight;
  }
}
