import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';


const appRoutes: Routes = [
  {
    path: '',
    component: CategoriesComponent
  },
  {
    path: 'categories/:id',
    component: CategoryDetailComponent
  },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
