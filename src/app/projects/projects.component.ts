import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/entities/project';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  @ViewChild('main') main!: ElementRef<HTMLElement>;

  public sectionActive: number = 0;
  public project$: Observable<Project[]>;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.project$ = this.projectsService.getProjects();
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
