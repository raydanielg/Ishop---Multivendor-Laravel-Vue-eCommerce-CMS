import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { OrderconfirmedPage } from '../orderconfirmed/orderconfirmed';

@Component({
  selector: 'page-selectclothes',
  templateUrl: 'selectclothes.html'
})
export class SelectclothesPage {

 clothes: string = "man";
 washtype: string = "wo";

  constructor(public navCtrl: NavController) {

  }
  
  orderconfirmed(){
    this.navCtrl.push(OrderconfirmedPage)
  }

}
