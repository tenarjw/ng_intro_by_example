import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StyleExampleComponent } from './style-example.component';


@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    AppComponent,
    StyleExampleComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
