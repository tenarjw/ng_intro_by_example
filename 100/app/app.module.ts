import { BrowserModule }  from '@angular/platform-browser';  
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TopbackgroundDirective } from './app.directives';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, TopbackgroundDirective],
  bootstrap: [AppComponent]
})
export class AppModule {
}