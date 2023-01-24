import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MaterialModule } from '../material/material.module';
import { FooterComponent } from './components/footer/footer.component';
import { IconComponent } from './components/icon/icon.component';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, FooterComponent, IconComponent],
  imports: [CommonModule, MaterialModule],
  exports: [HeaderComponent, SidebarComponent, FooterComponent],
})
export class SharedModule {}
