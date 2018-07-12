import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  helloName: string;

  constructor() {
    this.helloName = 'Jan Kowalski';
  }
}
