import { Component } from '@angular/core';
import { Product, products } from "./product";
import { NgFor } from '@angular/common';
import { empty } from 'rxjs';

@Component({
  selector: '[app-projects]',
  standalone: true,
  imports: [NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.sass'
})
export class ProjectsComponent {
  products: Product[] = products
  currentItem: Product

  constructor(){
    this.currentItem = products[0]
  }

  getCurrentItem = (index: number) => {
    this.currentItem = products[index]
  }
}
