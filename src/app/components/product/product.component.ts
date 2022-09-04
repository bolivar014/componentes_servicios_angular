import { Component, OnInit, Input } from '@angular/core';
// Importamos modelo product
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  // Estado inicial para Obj Product
  @Input() product: Product = {
    id: '',
    price: 0,
    image: '',
    name: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
