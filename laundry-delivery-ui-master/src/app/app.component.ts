import { Component, Inject } from '@angular/core';
import { Platform, ModalController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { TabsPage } from '../pages/tabs/tabs';
import { SigninPage } from '../pages/signin/signin';

import {TranslateService} from '../../node_modules/@ngx-translate/core';
import { APP_CONFIG, AppConfig } from './app.config';
import { Constants } from '../models/constants.models';
import { Vt_popupPage } from '../pages/vt_popup/vt_popup';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SigninPage;

  rtlSide: string = "left";

  constructor(@Inject(APP_CONFIG) private config: AppConfig,
  public platform: Platform, public statusBar: StatusBar, modalCtrl: ModalController,
  public splashScreen: SplashScreen, public translate: TranslateService,events: Events) {
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
}
