import { Injectable } from '@angular/core';
// importamos
import { Product } from '../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class StoreService {

  // Array en vació de productos
  private myShoppingCart: Product[] = [];

  constructor() { }

  // Evento para agregar producto al carrito de compras
  addProduct(product: Product) {
    this.myShoppingCart.push(product);
  }

  getShoppingCart() {
    return this.myShoppingCart;
  }

  getTotal () {
    return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }
}
