import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="p3">
<h1>dyrektywy</h1>
  </div>
  <div>
   <app-myif>
      Hello
    </app-myif>

   <app-myfor>
      Przykład for
    </app-myfor>
    
  </div>`
})

export class AppComponent {
  buttons: Array<any> = [];
}
