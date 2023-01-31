import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MaterialModule } from '../material/material.module';
import { FooterComponent } from './components/footer/footer.component';
import { IconComponent } from './components/icon/icon.component';
import { RouterModule } from '@angular/router';
import { SocialComponent } from './components/social/social.component';
import { ImageComponent } from './components/image/image.component';
import { LogoComponent } from './components/logo/logo.component';
import { HeroComponent } from './components/hero/hero.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    IconComponent,
    SocialComponent,
    ImageComponent,
    LogoComponent,
    HeroComponent
  ],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ImageComponent,
    IconComponent,
    LogoComponent,
    HeroComponent
  ],
})
export class SharedModule {}
