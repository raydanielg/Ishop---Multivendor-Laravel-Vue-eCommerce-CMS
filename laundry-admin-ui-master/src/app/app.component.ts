import { Component, ViewChild, Inject } from '@angular/core';
import { Nav, Platform, Events, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { SigninPage } from '../pages/signin/signin';
import { HomePage } from '../pages/home/home';
import { OrdersPage } from '../pages/orders/orders'; 
import { MessagesPage } from '../pages/messages/messages';
import {TranslateService} from '../../node_modules/@ngx-translate/core';
import { AppConfig, APP_CONFIG } from './app.config';
import { Vt_popupPage } from '../pages/vt_popup/vt_popup';
import { Constants } from '../models/constants.models';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { ManagelanguagePage } from '../pages/managelanguage/managelanguage';

@Component({
  templateUrl: 'app.html' 
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = SigninPage;
  rtlSide: string = "left";

  pages: Array<{title: string, component: any}>;

  constructor(@Inject(APP_CONFIG) private config: AppConfig,private platform: Platform, private statusBar:  StatusBar,
  modalCtrl: ModalController, private splashScreen: SplashScreen, public translate:TranslateService,
  public inAppBrowser: InAppBrowser,events: Events) {
    let defaultLang = window.localStorage.getItem(Constants.KEY_DEFAULT_LANGUAGE) ? window.localStorage.getItem(Constants.KEY_DEFAULT_LANGUAGE) : 'en';
    this.initializeApp(defaultLang);
    events.subscribe('language:selection', (language) => {
      this.initializeApp(language);
    });
    if (this.config.demoMode) {
      setTimeout(() => {
        let modal = modalCtrl.create(Vt_popupPage);
        modal.onDidDismiss((data) => { });
        modal.present();
      }, 15000)
    }
  }

  initializeApp(lang) {
    this.translate.setDefaultLang(lang);
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.translate.use(lang);
      this.setDirectionAccordingly(lang);
    });
  }


  setDirectionAccordingly(lang: string) {
    this.rtlSide = "left";
    switch (lang) {
      case 'ar': {
        this.platform.setDir('ltr', false);
        this.platform.setDir('rtl', true);
        this.rtlSide = "right";
        break;
      }
      default: {
        this.platform.setDir('rtl', false);
        this.platform.setDir('ltr', true);
        break;
      }
    }
  }

  setDirection() {
    console.log('plat rtl: ' + this.platform.isRTL);
    if (this.platform.isRTL) {
      this.platform.setDir('rtl', true);
    } else {
      this.platform.setDir('ltr', true);
    }
  }

  getSideOfCurLang() {
    return this.platform.dir() === 'rtl' ? "right" : "left";
  }

  getSuitableLanguage(language) {
    language = language.substring(0, 2).toLowerCase();
    console.log('check for: ' + language);
    return this.config.availableLanguages.some(x => x.code == language) ? language : 'en';
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  home() {
  this.nav.setRoot(HomePage);
  }   
  orders() {
  this.nav.setRoot(OrdersPage);
  }      
  signin() {
  this.nav.setRoot(SigninPage);
  }  
 messages() {
  this.nav.setRoot(MessagesPage);
  }  
  chooseLanguage() {
    this.nav.setRoot(ManagelanguagePage)
  }
  developedBy() {
    const options: InAppBrowserOptions = {
      zoom: 'no'
    }
    const browser = this.inAppBrowser.create('https://verbosetechlabs.com/', '_system', options);
  }
}
