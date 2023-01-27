import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../material/material.module';
import { HeroComponent } from './components/hero/hero.component';
import { SharedModule } from '../shared/shared.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { CtaComponent } from './components/cta/cta.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    WelcomeComponent,
    IntroductionComponent,
    CtaComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    SharedModule,
  ]
})
export class HomeModule { }
