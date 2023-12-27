/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import themes from 'devextreme/ui/themes';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';


themes.initialized(() => {
  bootstrapApplication(AppComponent, appConfig)
    .catch(err => console.error(err));
});
