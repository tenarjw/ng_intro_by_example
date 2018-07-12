import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ng-template ngFor [ngForOf]="[1,2,3,4,5,6]" let-item>
      <div *ngIf="item > 3">
        {{item}}
      </div>
    </ng-template>
  `
})
export class AppComponent {
  
}