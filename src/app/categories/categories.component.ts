import { Component, Input } from '@angular/core';
import { Category } from './../category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent{
  
    categoryList: Category[] = [
      new Category('Books', 1),
      new Category('Antiques', 2),
      new Category('Toys and Games', 3),
      new Category('Free', 4),
      new Category('Furniture', 5),
      new Category('Farm and Garden', 6),
      new Category('Cars and Trucks', 7),
      new Category('General', 8)
    ]

  constructor(private router: Router) {}

  goToDetailPage(clickedCategory: Category) {
    this.router.navigate(['categories', clickedCategory.id])
  }
}
