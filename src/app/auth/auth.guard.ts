import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';

import { AuthService } from '../shared/services';

export const authGuard: CanActivateFn = (route, state): UrlTree | boolean => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const defaultPath = '/';

  const isLoggedIn = authService.loggedIn;
    const isAuthForm = [
      'login-form',
      'reset-password',
      'create-account',
      'change-password/:recoveryCode'
    ].includes(route.routeConfig?.path || defaultPath);

    if (isLoggedIn && isAuthForm) {
      authService.lastAuthenticatedPath = defaultPath;

      return router.createUrlTree([defaultPath]);
    }

    if (!isLoggedIn && !isAuthForm) {
      return router.createUrlTree(['/login-form']);
    }

    if (isLoggedIn) {
      authService.lastAuthenticatedPath = route.routeConfig?.path || defaultPath;
    }

    return isLoggedIn || isAuthForm;
};
