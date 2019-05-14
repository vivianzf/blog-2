import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './frontend/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  // backend
  {
    path: 'admin',
    loadChildren: './backend/layout/layout.module#LayoutModule'
  },
  // frontend
  {
    path: '',
    loadChildren: './frontend/layout/layout.module#LayoutModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
