import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { LoginModule } from './login/login.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PopupComponent } from './components/popup/popup/popup.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    RouterModule.forRoot([]),
    PopupComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
