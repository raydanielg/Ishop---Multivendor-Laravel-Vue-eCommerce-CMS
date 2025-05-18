import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { AccountPage } from '../pages/account/account';
import { AddaddressPage } from '../pages/addaddress/addaddress';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { MyordersPage } from '../pages/myorders/myorders';
import { NotificationPage } from '../pages/notification/notification';
import { OffersPage } from '../pages/offers/offers';
import { OrderconfirmedPage } from '../pages/orderconfirmed/orderconfirmed';
import { OrderslipPage } from '../pages/orderslip/orderslip';
import { OtpPage } from '../pages/otp/otp';
import { PasswordPage } from '../pages/password/password';
import { PaymentPage } from '../pages/payment/payment';
import { ProfilePage } from '../pages/profile/profile';
import { RatePage } from '../pages/rate/rate';
import { SelectaddressPage } from '../pages/selectaddress/selectaddress';
import { SelectclothesPage } from '../pages/selectclothes/selectclothes';
import { SelectdatePage } from '../pages/selectdate/selectdate';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { TncPage } from '../pages/tnc/tnc';
 
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BuyAppAlertPage } from '../pages/buyappalert/buyappalert';
import { ManagelanguagePage } from '../pages/managelanguage/managelanguage';
import { Vt_popupPage } from '../pages/vt_popup/vt_popup';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BaseAppConfig, APP_CONFIG } from './app.config';
import { InAppBrowser } from '@ionic-native/in-app-browser';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    AccountPage,
    AddaddressPage,
    ContactPage,
    HomePage,
    MyordersPage,
    NotificationPage,
    OffersPage,
    OrderconfirmedPage,
    OrderslipPage,
    OtpPage,
    PasswordPage,
    PaymentPage,
    ProfilePage,
    RatePage,
    SelectaddressPage,
    SelectclothesPage,
    SelectdatePage,
    SigninPage,
    SignupPage,
    TabsPage,
    TncPage,
    BuyAppAlertPage,
    ManagelanguagePage,
    Vt_popupPage
  ],
  imports: [
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
    AboutPage,
    AccountPage,
    AddaddressPage,
    ContactPage,
    HomePage,
    MyordersPage,
    NotificationPage,
    OffersPage,
    OrderconfirmedPage,
    OrderslipPage,
    OtpPage,
    PasswordPage,
    PaymentPage,
    ProfilePage,
    RatePage,
    SelectaddressPage,
    SelectclothesPage,
    SelectdatePage,
    SigninPage,
    SignupPage,
    TabsPage,
    TncPage,
    BuyAppAlertPage,
    ManagelanguagePage,
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
