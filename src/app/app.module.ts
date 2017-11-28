import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ComponentsModule } from '../components/components.module';
import { WrapperPage } from '../pages/wrapper/wrapper';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { RegisterFormPage } from '../pages/register-form/register-form';
import { RegisterTermsPage } from '../pages/register-terms/register-terms';
import { AccountProvider } from '../providers/account/account';
import { ConfigProvider } from '../providers/config/config';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    LoginPage,
    RegisterPage,
    RegisterFormPage,
    RegisterTermsPage,
    ForgotPasswordPage,
    WrapperPage,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    LoginPage,
    RegisterPage,
    RegisterFormPage,
    RegisterTermsPage,
    ForgotPasswordPage,
    WrapperPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AccountProvider,
    ConfigProvider
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
