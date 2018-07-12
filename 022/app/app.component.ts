import { Component } from '@angular/core';

import { EmailService } from './email/index';
import { LoggerService } from './logger/index';

@Component({
	selector: 'app-root',
	template: `
	  <strong>Email Service API Key</strong>
<strong><br />!!!!!!! ilustracja problemu !!!!!!!!<br />to nie jest poprawne rozwiązanie<strong>
	  <p>{{emailService.apiConfig.apiKey}}</p>
	  <hr/>
	  <strong>Logger Service API Key</strong>
	  <p>{{loggerService.apiConfig.apiKey}}</p>
	`
})
export class AppComponent {
  constructor(public emailService: EmailService, public loggerService: LoggerService) { }
}