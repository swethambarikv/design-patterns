import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BaseLoggerService {
  log(message: string) {
    console.log(message);
  }
}
