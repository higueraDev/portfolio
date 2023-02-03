import { Component } from '@angular/core';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  constructor(private readonly store: StoreService){}

  toggleMenu(){
    this.store.setMenuState(false)
  }
}
