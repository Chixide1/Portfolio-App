import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import data from './projects.json';
import { RouterLink } from '@angular/router';

@Component({
  selector: '[app-projects]',
  standalone: true,
  imports: [NgFor, RouterLink],
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
  live: string
  tags: string[]
}