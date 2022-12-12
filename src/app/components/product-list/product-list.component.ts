import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css', '../details/details.component.css']
})
export class ProductListComponent {

  constructor(
    private router: Router,
  ) {
  }

  redirect(place: string) {
    this.router.navigate([place]);
  }


  addCarrito (){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Se añadió al carrito',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
