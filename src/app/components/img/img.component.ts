import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  img: string = "";
  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('change just img', this.img);
  }

  @Input() alt: string = "";
  // Envio imagen desde componente hijo hacía padre
  @Output() loaded = new EventEmitter<string>();

  imageDefault = "https://pm1.narvii.com/7124/83568d283df6c34715a1cf898dae00ca5b57163ar1-720-1280v2_hq.jpg";
  counter = 0;
  counterFn: number | undefined;

  constructor() {
    // Before Render
    // No Async
    console.log('se ha ejecutado el constructor', 'imgValue => ', this.img);
  }

  ngOnChanges(changes: SimpleChanges) {
    // Before Render
    // changes inputs - times
    console.log('ngOnChanges', 'imgValue => ', this.img);
    console.log('changes:', changes);
  }
  ngOnInit(): void {
    // Before Render
    // Async - Fetch - promises - Once Time
    console.log('ngOnChanges', 'imgValue => ', this.img);
    // this.counterFn = window.setInterval(() => {
    //   this.counter += 1;
    //   console.log('counter: ', this.counter);
    // }, 1000)
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

  ngAfterViewInit(): void {
    // After Render
    // handler children
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    // Delete
    console.log('ngOnDestroy');
    // Limpiamos timer
    // window.clearInterval(this.counterFn);
  }
}
