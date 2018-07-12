import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ForExampleComponent } from './for-example.component';


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    ForExampleComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

