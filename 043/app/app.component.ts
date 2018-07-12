import {Component} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Component({
    selector: 'app-root',
    template: `
      <b>Angular HTTP requests using RxJs Observables!</b>
      <ul>
        <li *ngFor="let doctor of doctors">{{doctor.name}}</li>
      </ul>
      
      `
})

export class AppComponent {
  private doctors = [];
  
  constructor(http: Http) {
    http.get('https://jsonplaceholder.typicode.com/users/')
        .flatMap((data) => data.json())
        .subscribe((data) => {
          this.doctors.push(data);

        });
  }
}