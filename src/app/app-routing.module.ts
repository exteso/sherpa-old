import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guard/auth.guard';

import { PreloaderService } from './services'

const routes: Routes = [
  { path: '', redirectTo: 'loader', pathMatch: 'full' },
  { path: 'edit-profile', loadChildren: () => import('./pages/edit-profile/edit-profile.module').then(m => m.EditProfilePageModule), canActivate: [AuthGuard], data: {preload: true} },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule), canActivate: [AuthGuard], data: {preload: true} },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
  { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule) },
  { path: 'walkthrough', loadChildren: () => import('./pages/walkthrough/walkthrough.module').then(m => m.WalkthroughPageModule) },
  {
    path: 'create-profile',
    loadChildren: () => import('./pages/create-profile/create-profile.module').then(m => m.CreateProfilePageModule),
    canActivate: [AuthGuard], data: {preload: true}
  },
  { path: 'user-list', loadChildren: () => import('./pages/user-list/user-list.module').then(m => m.UserListPageModule), canActivate: [AuthGuard], data: {preload: true} },
  { path: 'crud', loadChildren: () => import('./pages/crud/crud.module').then(m => m.CrudPageModule), canActivate: [AuthGuard], data: {preload: true} },
  { path: 'geofire', loadChildren: () => import('./pages/geofire/geofire.module').then(m => m.GeofirePageModule), canActivate: [AuthGuard], data: {preload: true} },
  { path: 'group-create', loadChildren: () => import('./pages/group/group-create/group-create.module').then(m => m.GroupCreatePageModule), canActivate: [AuthGuard] },
  { path: 'group-detail/:id', loadChildren: () => import('./pages/group/group-detail/group-detail.module').then(m => m.GroupDetailPageModule), canActivate: [AuthGuard] },
  { path: 'group-list', loadChildren: () => import('./pages/group/group-list/group-list.module').then(m => m.GroupListPageModule), canActivate: [AuthGuard], data: {preload: true} },
  { path: 'show-user', loadChildren: () => import('./pages/modal/show-user/show-user.module').then(m => m.ShowUserPageModule) },
  { path: 'loader', loadChildren: () => import('./pages/loader/loader/loader.module').then(m => m.LoaderPageModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloaderService })],
  exports: [RouterModule]
})

export class AppRoutingModule {}