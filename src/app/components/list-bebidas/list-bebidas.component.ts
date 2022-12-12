import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-bebidas',
  templateUrl: './list-bebidas.component.html',
  styleUrls: ['./list-bebidas.component.css']
})
export class ListBebidasComponent {

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
