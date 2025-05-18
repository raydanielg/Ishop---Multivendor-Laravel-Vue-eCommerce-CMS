import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SelectaddressPage } from '../selectaddress/selectaddress';

@Component({
  selector: 'page-orderconfirmed',
  templateUrl: 'orderconfirmed.html'
})
export class OrderconfirmedPage {

  constructor(public navCtrl: NavController) {

  }
  
  selectaddress(){
    this.navCtrl.push(SelectaddressPage)
  }


}
