import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { PasswordPage } from '../password/password';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {

  constructor(public navCtrl: NavController) {

  }
 signup(){
        this.navCtrl.push(SignupPage)
  } 
 password(){
        this.navCtrl.push(PasswordPage)
  } 
 tabs(){
        this.navCtrl.push(TabsPage)
  }  
}
