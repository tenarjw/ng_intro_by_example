import {Component, ChangeDetectorRef} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';

@Component({
    selector: 'app-root',
    template: `
      <b>Angular HTTP requests using RxJs Observables!</b>
      
      <div><code>{{doctors.toString()}}</code></div>
      `
})

export class AppComponent {
  private doctors = [];
  
  constructor(http: Http, cd: ChangeDetectorRef) {
    http.get('http://jsonplaceholder.typicode.com/users/')
        .flatMap((data) => {
          console.log(data);
          return data.json()} )
        .filter((person) => { 
           if (person) { 
             return person.id > 5; 
           } else return false; 
        } )
        .map((person) => "Dr." + person.name)
        .subscribe((data) => {
          this.doctors.push(data);
          
          cd.detectChanges();
        });
  }
}