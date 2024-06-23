import { Component,HostListener } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: '[app-about]',
  standalone: true,
  imports: [MatChipsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.sass'
})
export class AboutComponent {
  public scrolled: boolean = false

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 0;
  }
}
