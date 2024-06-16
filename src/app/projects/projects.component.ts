import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import data from './projects.json';

@Component({
  selector: '[app-projects]',
  standalone: true,
  imports: [NgFor, MatGridListModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.sass'
})
export class ProjectsComponent {
  projects: Project[] = data
  currentItem: Project
  selected: any

  constructor(){
    this.currentItem = this.projects[0]
    this.selected = this.currentItem.name
  }

  getCurrentItem = (name: string) => {
    const index = this.projects.findIndex(i => i.name == name)
    this.currentItem = this.projects[index]
    this.selected = this.currentItem.name
  }
}

type Project = {
  name: string,
  description: string,
  img: string,
  github: string
  tags: string[]
}