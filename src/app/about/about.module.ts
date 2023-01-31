import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CtaComponent } from './components/cta/cta.component';


@NgModule({
  declarations: [
    AboutComponent,
    WelcomeComponent,
    IntroductionComponent,
    CtaComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class AboutModule { }
