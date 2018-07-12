import { Injectable, Inject } from '@angular/core';

import { EmailConfig } from './email.config';

export const apiConfig = 'api-config';

@Injectable()
export class EmailService {
  constructor(@Inject(apiConfig) public apiConfig: EmailConfig) { }
}