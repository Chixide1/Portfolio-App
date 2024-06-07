import { Component } from '@angular/core';
import { RoughNotationModule } from 'ng-rough-notation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RoughNotationModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {

}
