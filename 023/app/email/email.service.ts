import { Injectable, Inject, InjectionToken } from '@angular/core';

import { EmailConfig } from './email.config';

export const apiConfig = new InjectionToken('api-config');

@Injectable()
export class EmailService {
  constructor(@Inject(apiConfig) public apiConfig: EmailConfig) { }
}