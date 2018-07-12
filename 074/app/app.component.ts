import { Component, Inject, provide } from '@angular/core';
import { ZoneService } from './zone.service.ts';

@Component({
  selector: 'app',
  template: `
  <button (click)="handleClick(false)">Inside Angular Zone</button>
  <button (click)="handleClick(true)">Outside Angular Zone</button>
  `
})
export class AppComponent {
  constructor(private zoneService: ZoneService) {
  }
  
  handleClick(outside: Boolean = false) {
    this.zoneService.doAsyncThings(outside);
  }
}
