import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { PasswordPage } from '../password/password';
import { SignupPage } from '../signup/signup';
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {

  constructor(public navCtrl: NavController) {

  }

  tab() {
    this.navCtrl.setRoot(TabsPage);
  }
  password() {
    this.navCtrl.push(PasswordPage);
  }
  signup() {
    this.navCtrl.push(SignupPage);
  }
}
