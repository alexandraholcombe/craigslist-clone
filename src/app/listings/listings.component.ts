import { Component, OnInit, Input } from '@angular/core';
import { Listing } from './../listing.model';
import { Category } from './../category.model';
import { Router } from '@angular/router';
import { ListingService } from '../listing.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css'],
  providers: [ListingService]
})


export class ListingsComponent implements OnInit {
  @Input() categoryId: number;

  categoryListingList: Listing[];

  constructor(
    private router: Router,
    private listingService: ListingService
  ) { }

  ngOnInit() {
    console.log(this.categoryId);
    this.categoryListingList = this.listingService.getListingByCategoryId(this.categoryId);
  }

}
