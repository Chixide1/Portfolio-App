import { NgIf} from '@angular/common';
import { Component, Input} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: '[app-navbar]',
  standalone: true,
  imports: [NgIf, MatIconModule, MatMenuModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.sass'
})
export class NavbarComponent{
  @Input() screenWidth: number = 0
}
