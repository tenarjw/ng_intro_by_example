import { Component, Input } from '@angular/core';

@Component({
  selector: 'tag-hello',
  template: '<p>Witaj, {{name}}!</p>',
})
export class HelloComponent {
  @Input() name: string;
}