import { Injectable, Inject } from '@angular/core';

import { LoggerConfig } from './logger.config';

export const apiConfig = 'api-config';

@Injectable()
export class LoggerService {
  constructor(@Inject(apiConfig) public apiConfig: LoggerConfig) { }
}
