import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((module) => module.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
