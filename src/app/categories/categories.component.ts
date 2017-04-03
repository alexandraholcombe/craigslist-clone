import { Component, OnInit } from '@angular/core';
import { Category } from './../category.model';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers: [CategoryService]
})

export class CategoriesComponent implements OnInit {
  categoryList: Category[];

  constructor(
    private router: Router,
    private categoryService: CategoryService
  ) {}

  ngOnInit() {
    this.categoryList = this.categoryService.getCategories();

  }

  goToDetailPage(clickedCategory: Category) {
    this.router.navigate(['categories', clickedCategory.id])
  }
}
