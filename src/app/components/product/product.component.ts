import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
    title: '',
    description: '',
    category: ''
  }

  @Output() addedProduct = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  // Evento para agregar producto al carrito de compras
  onAddToCart() {
    this.addedProduct.emit(this.product);
  }
}
