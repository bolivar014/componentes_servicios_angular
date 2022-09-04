import { Component, OnInit } from '@angular/core';
// Importamos modelo producto y servicio
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product[] = [];
  total= 0;

  // Objeto products
  products: Product[] = [];


  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
    ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    // Consumimos el api e imprimos data para ver los resultados del response
    this.productsService.getAllProducts()
    .subscribe(data => {
      console.log(data);
      this.products = data;
    })
  }

  // Evento para agregar
  onAddToShoppingCart(product: Product) {
    // console.log(product);
    // Agregamos nuevo producto
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }
}
