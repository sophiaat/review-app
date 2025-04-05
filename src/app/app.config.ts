import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { Directionality } from '@angular/cdk/bidi';
import { Subject } from 'rxjs';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    {
      provide: Directionality,
      useValue: {
        value: 'rtl',
        change: new Subject()
      }
    }
  ]
};
