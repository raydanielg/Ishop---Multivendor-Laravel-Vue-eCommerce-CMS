import { Component, Inject } from '@angular/core';
import { NavController, App  } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { TncPage } from '../tnc/tnc';
import { ManagelanguagePage } from '../managelanguage/managelanguage';
import { SigninPage } from '../signin/signin';
import { AppConfig, APP_CONFIG } from '../../app/app.config';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
 

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {
  app: any;

  constructor(@Inject(APP_CONFIG) private config: AppConfig,public navCtrl: NavController, public appCtrl: App,
  private inAppBrowser: InAppBrowser) {

  }
 contact(){
        this.navCtrl.push(ContactPage)
  }	 
 tnc(){
        this.navCtrl.push(TncPage)
  }
 chooseLanguage(){
        this.navCtrl.push(ManagelanguagePage)
  }	 
 alertLogout(){  
	 this.appCtrl.getRootNav().push(SigninPage);
  }	
  developedBy() {
    const options: InAppBrowserOptions = {
      zoom: 'no'
    }
    this.inAppBrowser.create('https://verbosetechlabs.com/', '_system', options);
  }
}
