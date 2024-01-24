import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { RegisterComponent } from '../register/register.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    RegisterComponent,
    HttpClientModule,
  ],
})
export class LoginModule {}
