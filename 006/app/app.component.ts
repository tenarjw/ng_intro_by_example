import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnChanges {
  num = 1;
  parentCount = 0;

  ngOnChange(val: number) {
    this.parentCount = val;
  }
}
