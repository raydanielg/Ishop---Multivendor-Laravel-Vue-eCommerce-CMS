import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-addaddress',
  templateUrl: 'addaddress.html'
})
export class AddaddressPage {
address: string = "home"
  constructor(public navCtrl: NavController) {
  }

}
