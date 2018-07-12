import { Component, OnInit } from '@angular/core';
import { GreeterService } from './greeter.service';

@Component({
  selector: 'app-root',
  template: '<b>{{greeting}}</b>'
})
export class AppComponent implements OnInit {
  public greeting ='';
  
  constructor(private greeterService: GreeterService) { }
  
  ngOnInit() {
    this.greeting = this.greeterService.getMessage();
  }
}