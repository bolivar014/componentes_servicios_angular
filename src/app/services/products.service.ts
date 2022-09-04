import { Injectable } from '@angular/core';
// Importamos servicio HTTP de angular
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  // Api para consultar todos los productos en api
  getAllProducts() {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }
}
