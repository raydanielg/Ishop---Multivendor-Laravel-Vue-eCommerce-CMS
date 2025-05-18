import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { OtpPage } from '../otp/otp';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(public navCtrl: NavController) {

  }
  otp() {
    this.navCtrl.push(OtpPage)
  }

}
