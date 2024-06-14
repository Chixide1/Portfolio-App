import { Component } from '@angular/core';
import { Product, products } from "./product";
import { NgFor,NgClass } from '@angular/common';

@Component({
  selector: '[app-projects]',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.sass'
})
export class ProjectsComponent {
  products: Product[] = products
  currentItem: Product
  selected: any

  constructor(){
    this.currentItem = products[0]
    this.selected = this.currentItem.name
  }

  getCurrentItem = (name: string) => {
    const index = products.findIndex(i => i.name == name)
    this.currentItem = products[index]
    this.selected = this.currentItem.name
  }
}
