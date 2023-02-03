import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { StoreService } from '../../../services/store.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  public iconColor = 'white';

  public logo: string = './assets/images/higo.png';

  constructor(private readonly store: StoreService) {}

  setMenuClosed() {
    this.store.setMenuState(false);
  }

  toggle() {
    this.sidenav.toggle();
  }

  close() {
    if (this.sidenav) {
      this.sidenav.close();
      this.setMenuClosed()
    }
  }

  changeColor() {
    this.iconColor = '#000000';
  }
}
