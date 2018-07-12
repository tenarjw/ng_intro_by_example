import { Component } from '@angular/core';

@Component({
  selector: 'tag-hello',
  template: '<p>Witaj, {{name}}!</p>',
})
export class HelloComponent {
  name: string;

  constructor() {
    this.name = 'Świecie';
  }
}
