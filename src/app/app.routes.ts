import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
    {path: '', component: HomeComponent,
        children:[
            {path: '', component: AboutComponent},
            {path: 'projects', component: ProjectsComponent}
        ]
    }
];