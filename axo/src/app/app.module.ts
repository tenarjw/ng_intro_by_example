import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { XoComponent } from './xo.component';

@NgModule({
  declarations: [
    AppComponent, XoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,XoComponent]
})
export class AppModule { }
