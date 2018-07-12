import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { IfExampleComponent } from './if-example.component';
import { AppIfComponent } from './app.if.component';

import { ForExampleComponent } from './for-example.component';
import { AppForComponent } from './app.for.component';


@NgModule({
  declarations: [
    AppComponent,

    IfExampleComponent,
    AppIfComponent,

    ForExampleComponent,
    AppForComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
