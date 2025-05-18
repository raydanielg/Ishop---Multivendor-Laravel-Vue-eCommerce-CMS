import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OrdersPage } from '../pages/orders/orders';
import { OrdersinfoPage } from '../pages/ordersinfo/ordersinfo';
import { SigninPage } from '../pages/signin/signin';
import { Update_orderPage } from '../pages/update_order/update_order';
import { MessagesPage } from '../pages/messages/messages';
import { ChatsPage } from '../pages/chats/chats';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Vt_popupPage } from '../pages/vt_popup/vt_popup';
import { BuyAppAlertPage } from '../pages/buyappalert/buyappalert';
import { ManagelanguagePage } from '../pages/managelanguage/managelanguage';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { APP_CONFIG, BaseAppConfig } from './app.config';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OrdersPage,
    OrdersinfoPage,
    SigninPage,
    MessagesPage,
    ChatsPage,
    Update_orderPage,
    ManagelanguagePage,
    BuyAppAlertPage,
    Vt_popupPage
  ], imports: [
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
    HomePage,
    OrdersPage,
    OrdersinfoPage,
    SigninPage,
    MessagesPage,
    ChatsPage,
    Update_orderPage,
    ManagelanguagePage,
    BuyAppAlertPage,
    Vt_popupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,InAppBrowser,
    { provide: APP_CONFIG, useValue: BaseAppConfig },
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
