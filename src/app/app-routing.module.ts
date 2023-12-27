import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { ChangePasswordFormComponent, CreateAccountFormComponent, LoginFormComponent, ResetPasswordFormComponent } from './shared/components';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [ authGuard ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ authGuard ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ authGuard ]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ authGuard ]
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [ authGuard ]
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [ authGuard ]
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [ authGuard ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), DxDataGridModule, DxFormModule],
  providers: [],
  exports: [RouterModule],
  declarations: [
  ]
})
export class AppRoutingModule { }
