import { Injectable } from '@angular/core';
import { Listing } from './listing.model';
import { LISTINGS } from './mock-listings';
import { Category } from './category.model';

@Injectable()
export class ListingService {

  constructor() { }

  getListings() {
    console.log(LISTINGS);
    return LISTINGS;
  }

  getListingById(listingId){
    for (var i = 0; i < LISTINGS.length; i++) {
      if (LISTINGS[i].id === listingId) {
        return LISTINGS[i];
      }
    }
  }

  categoryListings: Listing[] = [];

  getListingByCategoryId(categoryId){
    for (var i = 0; i < LISTINGS.length; i++) {
      if (LISTINGS[i].categoryId === categoryId) {
        this.categoryListings.push(LISTINGS[i]);
      }
    }
    return this.categoryListings;
  }
}
