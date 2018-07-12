import {Component} from '@angular/core';

@Component({
  selector: 'app-myif',
  template: `
    <button type="button" (click)="toggleExists()">Toggle Component</button>
    <hr>
    <app-if-example *ngIf="exists">
      przykład dyrektywy if
    </app-if-example>
  `
})
export class AppIfComponent {
  exists = true;
  
  toggleExists() {
    this.exists = !this.exists;
  }
}