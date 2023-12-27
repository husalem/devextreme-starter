import { Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SideNavOuterToolbarComponent } from './layouts';
import { FooterComponent } from './shared/components';
import { AppInfoService, AuthService, ScreenService } from './shared/services';
import { UnauthenticatedContentComponent } from './unauthenticated-content';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    RouterOutlet,
    FooterComponent,
    SideNavOuterToolbarComponent,
    UnauthenticatedContentComponent,
  ],
})
export class AppComponent {
  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes)
      .filter((cl) => this.screen.sizes[cl])
      .join(' ');
  }

  constructor(
    private authService: AuthService,
    private screen: ScreenService,
    public appInfo: AppInfoService
  ) {}

  isAuthenticated() {
    return this.authService.loggedIn;
  }
}
