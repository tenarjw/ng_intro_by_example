import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tag-counter',
  templateUrl: 'counter.component.html'
})
export class CounterComponent {
  @Input()  count = 0;
  @Output() result = new EventEmitter<number>();

  increment() {
    this.count++;
    this.result.emit(this.count);
  }
}