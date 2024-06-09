import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarsComponent } from './navbars/navbars.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarsComponent, HomeComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'Portfolio-App';
}
