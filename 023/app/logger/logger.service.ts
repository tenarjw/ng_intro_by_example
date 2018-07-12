import { Injectable, Inject, InjectionToken } from '@angular/core';

import { LoggerConfig } from './logger.config';

export const apiConfig = new InjectionToken('api-config');

@Injectable()
export class LoggerService {
  constructor(@Inject(apiConfig) public apiConfig: LoggerConfig) { }
}
