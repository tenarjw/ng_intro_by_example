import { Injectable } from '@angular/core';

@Injectable()
export class GreeterService {
  private message: string = 'Hello World - this is Service Greeter!';
  
  getMessage() {
    return this.message;
  }
}
