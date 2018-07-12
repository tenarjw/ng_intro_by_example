import { Component } from '@angular/core';

@Component({
  selector: 'tag-counter',
  template: `
    <div>
      <p>Licznik: {{num}}</p>
      <button (click)="increment()">Zwiększ</button>
    </div>
  `
})
export class CounterComponent {
  num = 0;

  increment() {
    this.num++;
  }
}
