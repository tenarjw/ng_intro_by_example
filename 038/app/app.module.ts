import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormatFileSizePipe } from './format_file_size.pipe';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    FormatFileSizePipe
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}