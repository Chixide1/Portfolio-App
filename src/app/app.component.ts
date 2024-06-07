import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarsComponent } from './navbars/navbars.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarsComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'Portfolio-App';
}
