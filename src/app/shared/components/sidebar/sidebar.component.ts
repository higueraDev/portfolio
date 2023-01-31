import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  public iconColor = 'white'

  public logo: string = './assets/images/higo.png';

  toggle() {
    this.sidenav.toggle();
  }

  close() {
    this.sidenav.close();
  }

  changeColor(){
    this.iconColor = '#000000'
  }
}
