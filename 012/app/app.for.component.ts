import { Component } from '@angular/core';

/*
pamiętaj: 
https://stackoverflow.com/questions/47866158/let-is-only-supported-on-ng-template-elements
*/
@Component({
  selector: 'app-myfor',
  template: `
    <hr>
    <app-for-example *ngFor="let episode of episodes" [episode]="episode">
      {{episode.title}}
    </app-for-example>
    
    <h2>Desugared</h2>
    <ng-template ngFor [ngForOf]="episodes" let-episode>
<app-for-example [episode]="episode">
{{episode.title}}
</app-for-example>
</ng-template>
    
  `
})
export class AppForComponent {
  episodes  = [
    { title: 'Winter Is Coming', director: 'Tim Van Patten' },
    { title: 'The Kingsroad', director: 'Tim Van Patten' },
    { title: 'Lord Snow', director: 'Brian Kirk' },
    { title: 'Cripples, Bastards, and Broken Things', director: 'Brian Kirk' },
    { title: 'The Wolf and the Lion', director: 'Brian Kirk' },
    { title: 'A Golden Crown', director: 'Daniel Minahan' },
    { title: 'You Win or You Die', director: 'Daniel Minahan' },
    { title: 'The Pointy End', director: 'Daniel Minahan' }
  ];
}