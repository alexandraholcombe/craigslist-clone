import { Component, Input } from '@angular/core';
import { Category } from './../category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent{
  @Input() categoryList: Category[];
}
