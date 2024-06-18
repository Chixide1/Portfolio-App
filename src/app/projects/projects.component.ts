import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import data from './projects.json';
import { RouterLink } from '@angular/router';
import {MatTabsConfig, MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: '[app-projects]',
  standalone: true,
  imports: [NgFor, RouterLink, MatTabsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.sass'
})
export class ProjectsComponent {
  projects: Project[] = data
}

type Project = {
  name: string,
  description: string,
  img: string,
  github: string
  live: string
  tags: string[]
}