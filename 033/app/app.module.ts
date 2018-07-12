import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProductPrice } from './product-price.component';

@NgModule({
  declarations: [
    ProductPrice
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ProductPrice]
})
export class AppModule { }
