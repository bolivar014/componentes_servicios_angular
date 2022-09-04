import { Component, OnInit } from '@angular/core';
// Importamos modelo producto y servicio
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product[] = [];
  total= 0;

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


  constructor(private storeService: StoreService) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
  }

  // Evento para agregar
  onAddToShoppingCart(product: Product) {
    // console.log(product);
    // Agregamos nuevo producto
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }
}
