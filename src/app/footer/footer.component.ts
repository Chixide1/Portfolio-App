import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: '[app-footer]',
  standalone: true,
  imports: [MatDividerModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.sass'
})
export class FooterComponent {
  getYear(){
    return new Date().getFullYear();
  }
}
