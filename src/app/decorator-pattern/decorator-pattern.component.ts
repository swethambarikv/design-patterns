import { Component } from '@angular/core';
import { BaseLoggerService } from '../service/base-logger.service';
import { LoggerToServerService } from '../service/logger-to-server.service';
import { LoggerToLocalStorageService } from '../service/logger-to-localstorage.service';

@Component({
  selector: 'decorator-pattern',
  templateUrl: './decorator-pattern.component.html',
  styleUrls: ['./decorator-pattern.component.scss'],
})
export class DecoratorPatternComponent {
  constructor(private logger: BaseLoggerService) {
    this.logger = new LoggerToLocalStorageService();
    // this.logger = new LoggerToServerService(this.logger);
  }

  logMessage() {
    this.logger.log('Hello, Decorator Pattern!');
  }
}
