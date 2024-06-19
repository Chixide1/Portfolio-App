import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import data from './projects.json';
import { RouterLink } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: '[app-projects]',
  standalone: true,
  imports: [NgFor, RouterLink, MatTabsModule, MatChipsModule],
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