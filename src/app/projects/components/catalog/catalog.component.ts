import { Component, Input } from '@angular/core';
import { Project } from '../../../models/entities/project';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent {
  @Input() project: Project | null = null;
  @Input() sectionColor: string = '';
}
