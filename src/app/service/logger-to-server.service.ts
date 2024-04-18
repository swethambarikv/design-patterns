import { Injectable } from '@angular/core';
import { BaseLoggerService } from './base-logger.service';

@Injectable({
  providedIn: 'root',
})
export class LoggerToServerService extends BaseLoggerService {
  constructor() {
    super();
  }

  override log(message: string) {
    console.log('Logging to server:', message);
  }
}
