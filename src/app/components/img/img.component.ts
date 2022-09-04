import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {

  @Input() img: string = "Valor inicial";
  // Envio imagen desde componente hijo hacía padre
  @Output() loaded = new EventEmitter<string>();

  imageDefault = "https://pm1.narvii.com/7124/83568d283df6c34715a1cf898dae00ca5b57163ar1-720-1280v2_hq.jpg";
  constructor() { }

  ngOnInit(): void {
  }

  // Evento para control de error - cuando no existe imagen
  imgError() {
    this.img = this.imageDefault;
  }

  // Evento para control de load - cuando imagen se carga correctamente
  imgLoaded() {
    console.log('loaded hijo');
    // Compartimos string de la imagen
    this.loaded.emit(this.img);
  }
}
