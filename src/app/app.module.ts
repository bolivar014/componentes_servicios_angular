import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImgComponent } from './components/img/img.component';
// Importamos FormsModule
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './components/product/product.component';
@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
