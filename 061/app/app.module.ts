import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TabComponent } from './tab.component';
import { Tab3Component } from './tab3.component';
import { TabContentComponent } from './tab-content.component'


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    Tab3Component,
    TabComponent,
    TabContentComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

