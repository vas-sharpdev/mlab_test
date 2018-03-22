import { Injectable, isDevMode } from '@angular/core';

@Injectable()
export class LoggerService {

  public log(message: any): void {
    console.log(this.date, message);
  }

  public debug(message: any): void {
    if (isDevMode()) {
      console.log(this.date, message);
    }
  }

  public warn(message: any): void {
    console.warn(this.date, message);
  }

  public error(message: any): void {
    console.error(this.date, message);
  }

  private get date(): string {
    return new Date().toLocaleTimeString();
  }
}
