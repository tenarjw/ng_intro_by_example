import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WrapContentPipe } from './wrap.pipe';
import { BoxComponent } from './box.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    WrapContentPipe, 
    BoxComponent, 
    DashboardComponent,
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
