import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  constructor(
    private router: Router,
  ) {
  }

  redirect(place: string) {
    this.router.navigate([place]);
  }
}
