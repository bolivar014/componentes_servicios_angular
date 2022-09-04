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

  // Evento loaded del padre
  onLoaded(img: string) {
    console.log('log padre', img);
  }

  // Cambiamos estado de imagen
  toggleImg() {
    this.showImg = !this.showImg;
  }
}
