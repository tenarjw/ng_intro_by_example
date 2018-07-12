import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { TabComponent } from './tab.component';
import { TabContentComponent } from './tab-content.component'


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    TabComponent,
    TabContentComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

//platformBrowserDynamic().bootstrapModule(AppModule);