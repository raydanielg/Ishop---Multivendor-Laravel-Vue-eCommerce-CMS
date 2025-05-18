import { Component, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProfilePage } from '../profile/profile';
import { MyordersPage } from '../myorders/myorders';
import { AddaddressPage } from '../addaddress/addaddress';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { TncPage } from '../tnc/tnc';
import { SigninPage } from '../signin/signin';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { AppConfig, APP_CONFIG } from '../../app/app.config';
import { ManagelanguagePage } from '../managelanguage/managelanguage';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {

  constructor(@Inject(APP_CONFIG) private config: AppConfig,public navCtrl: NavController, private inAppBrowser: InAppBrowser) {

  }

  profile() {
    this.navCtrl.push(ProfilePage);
  }
  myorders() {
    this.navCtrl.push(MyordersPage);
  }
  addaddress() {
    this.navCtrl.push(AddaddressPage);
  }
  about() {
    this.navCtrl.push(AboutPage);
  }
  contact() {
    this.navCtrl.push(ContactPage);
  }
  tnc() {
    this.navCtrl.push(TncPage);
  }
  signin() {
    this.navCtrl.setRoot(SigninPage);
  }
  chooseLanguage() {
    this.navCtrl.setRoot(ManagelanguagePage);
  }
  developedBy() {
    const options: InAppBrowserOptions = {
      zoom: 'no'
    }
    this.inAppBrowser.create('https://verbosetechlabs.com/', '_system', options);
  }
}
