import { Component } from '@angular/core';
// Importamos tipado Product
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  imgParent = 'https://i.pinimg.com/564x/b5/26/44/b5264448622d0a2536067610dc91b3c4.jpg';

  showImg = true;

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

  // Evento loaded del padre
  onLoaded(img: string) {
    console.log('log padre', img);
  }

  // Cambiamos estado de imagen
  toggleImg() {
    this.showImg = !this.showImg;
  }
}
