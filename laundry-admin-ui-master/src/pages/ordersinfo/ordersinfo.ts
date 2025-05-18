import { Component } from '@angular/core';
import { NavController, ModalController} from 'ionic-angular';

import { Update_orderPage} from '../update_order/update_order';
@Component({
  selector: 'page-ordersinfo',
  templateUrl: 'ordersinfo.html'
})
export class OrdersinfoPage {
  orders: string = "ordered_items";  
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
    update_order() {
    let modal = this.modalCtrl.create(Update_orderPage);
    modal.present();
  } 

}
