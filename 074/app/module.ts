import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ZoneService } from './zone.service';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    ZoneService
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
