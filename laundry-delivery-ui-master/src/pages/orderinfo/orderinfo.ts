import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-orderinfo',
  templateUrl: 'orderinfo.html'
})
export class OrderinfoPage {
 tab: string = "order_info";

  constructor(public navCtrl: NavController) {

  }

}
