import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  {
    path: 'tasks',
    loadComponent: () => import('./pages/tasks/tasks.component').then((mod) => mod.TasksComponent),
    canActivate: [ authGuard ]
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.component').then((mod) => mod.ProfileComponent),
    canActivate: [ authGuard ]
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then((mod) => mod.HomeComponent),
    canActivate: [ authGuard ]
  },
  {
    path: 'login-form',
    loadComponent: () => import('./shared/components/login-form/login-form.component').then((mod) => mod.LoginFormComponent),
    canActivate: [ authGuard ]
  },
  {
    path: 'reset-password',
    loadComponent: () => import('./shared/components/reset-password-form/reset-password-form.component').then((mod) => mod.ResetPasswordFormComponent),
    canActivate: [ authGuard ]
  },
  {
    path: 'create-account',
    loadComponent: () => import('./shared/components/create-account-form/create-account-form.component').then((mod) => mod.CreateAccountFormComponent),
    canActivate: [ authGuard ]
  },
  {
    path: 'change-password/:recoveryCode',
    loadComponent: () => import('./shared/components/change-password-form/change-password-form.component').then((mod) => mod.ChangePasswordFormComponent),
    canActivate: [ authGuard ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
