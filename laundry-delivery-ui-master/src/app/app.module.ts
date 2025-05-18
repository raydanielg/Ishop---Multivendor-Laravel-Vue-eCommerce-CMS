import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import { AccountPage } from '../pages/account/account';
import { ContactPage } from '../pages/contact/contact';
import { EarningsPage } from '../pages/earnings/earnings';
import { ManagelanguagePage } from '../pages/managelanguage/managelanguage';
import { NotificationPage } from '../pages/notification/notification';
import { OrderinfoPage } from '../pages/orderinfo/orderinfo';
import { OtpPage } from '../pages/otp/otp';
import { PasswordPage } from '../pages/password/password';
import { PickupPage } from '../pages/pickup/pickup';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { TncPage } from '../pages/tnc/tnc';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BuyAppAlertPage } from '../pages/buyappalert/buyappalert';
import { Vt_popupPage } from '../pages/vt_popup/vt_popup';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { APP_CONFIG, BaseAppConfig } from './app.config';
import { InAppBrowser } from '@ionic-native/in-app-browser';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    AccountPage,
    ContactPage,
    EarningsPage,
    ManagelanguagePage,
    NotificationPage,
    OrderinfoPage,
    OtpPage,
    PasswordPage,
    PickupPage,
    SigninPage,
    SignupPage,
    TabsPage,
    TncPage,
    BuyAppAlertPage,
    Vt_popupPage
  ],imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
      HttpClientModule,
      ReactiveFormsModule,
      FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccountPage,
    ContactPage,
    EarningsPage,
    ManagelanguagePage,
    NotificationPage,
    OrderinfoPage,
    OtpPage,
    PasswordPage,
    PickupPage,
    SigninPage,
    SignupPage,
    TabsPage,
    TncPage,
    BuyAppAlertPage,
    Vt_popupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,InAppBrowser,
    { provide: APP_CONFIG, useValue: BaseAppConfig },
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
