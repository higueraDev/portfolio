import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProjectsComponent,
    CatalogComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class ProjectsModule { }
