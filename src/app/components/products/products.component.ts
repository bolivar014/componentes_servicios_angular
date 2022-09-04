import { Component, OnInit } from '@angular/core';
// Importamos modelo producto
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // Array en vació de productos
  myShoppingCart: Product[] = [];
  total= 0;

  constructor() { }

  ngOnInit(): void {
  }

  // Objeto products
  products: Product[] = [
    {
      id: '1',
      name: 'Product 1',
      image: 'https://cdn.clickwallpapers.net/images/clickwallpapers-Nanatsu%20no%20Taizai-4k-img6.jpg',
      price: 100
    }, {
      id: '2',
      name: 'Product 2',
      image: 'https://cdn.clickwallpapers.net/images/clickwallpapers-Nanatsu%20no%20Taizai-4k-img6.jpg',
      price: 342
    }, {
      id: '3',
      name: 'Product 3',
      image: 'https://cdn.clickwallpapers.net/images/clickwallpapers-Nanatsu%20no%20Taizai-4k-img6.jpg',
      price: 264
    }, {
      id: '4',
      name: 'Product 4',
      image: 'https://cdn.clickwallpapers.net/images/clickwallpapers-Nanatsu%20no%20Taizai-4k-img6.jpg',
      price: 543
    }
  ];

  // Evento para agregar
  onAddToShoppingCart(product: Product) {
    // console.log(product);
    // Agregamos nuevo producto
    this.myShoppingCart.push(product);
    // this.total += product.price;
    this.total = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }
}
