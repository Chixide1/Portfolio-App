import { NgIf } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
import { NgxPageScrollModule } from 'ngx-page-scroll';


@Component({
  selector: '[app-navbar]',
  standalone: true,
  imports: [NgxPageScrollModule, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.sass'
})
export class NavbarComponent implements OnInit{
  public ScreenWidth: number = 0;

  ngOnInit() {
    this.ScreenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.ScreenWidth = window.innerWidth;
  }
}
