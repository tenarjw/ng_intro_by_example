import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
      <div>
      This web page has {{ pageViews | animateNumber }} views!
    </div>`
})
export class AppComponent {
  pageViews = 100;
  
  constructor() {
    // co 3 sekundy zwiększa o losową ilość
    setInterval(() => {
      this.pageViews += Math.round(Math.random() * 10);
    }, 3000);
  }
}
