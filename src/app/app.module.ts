import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//for toastr
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { Api } from './core/providers/api';
import { BaseUrlProvider } from './core/providers/base.url.provider';


import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';

//jwt interceptor imported
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: "./layout/layout.module#LayoutModule", canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: "./auth/auth.module#AuthModule" }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AuthModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    RouterModule.forRoot(routes),
  ],
  providers: [BaseUrlProvider, Api,  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
