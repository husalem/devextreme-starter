import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppInfoService, AuthService, ScreenService } from './shared/services';

@NgModule({
  declarations: [],
  imports: [BrowserModule],
  providers: [AuthService, ScreenService, AppInfoService],
  bootstrap: [],
})
export class AppModule {}
