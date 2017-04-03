import { Component } from '@angular/core';
import { Category } from './category.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  categoryList: Category[] = [
    new Category('Books'),
    new Category('Antiques'),
    new Category('Toys and Games'),
    new Category('Free'),
    new Category('Furniture'),
    new Category('Farm and Garden'),
    new Category('Cars and Trucks'),
    new Category('General')
  ]
}
