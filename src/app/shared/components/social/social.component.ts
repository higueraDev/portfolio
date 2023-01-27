import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit{
  public iconWidth: string = '55px'

  ngOnInit(): void {
    this.iconWidth = window.screen.width < 768 ? '55px' : '35px'
  }
}
