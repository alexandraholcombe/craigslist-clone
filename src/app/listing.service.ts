import { Injectable } from '@angular/core';
import { Listing } from './listing.model';
import { LISTINGS } from './mock-listings';

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
}
