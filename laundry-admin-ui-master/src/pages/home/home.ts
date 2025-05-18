import { Component, Inject } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { OrdersPage } from '../orders/orders';
import { AppConfig, APP_CONFIG } from '../../app/app.config';
import { BuyAppAlertPage } from '../buyappalert/buyappalert';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  woocommerce: string = "orders";
  orders_tab: string = "weekly";
  revenue: string = "monthly";

  constructor(@Inject(APP_CONFIG) private config: AppConfig, public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  orders() {
    this.navCtrl.push(OrdersPage)
  }
  buyThisApp() {
    let profileModal = this.modalCtrl.create(BuyAppAlertPage);
    profileModal.present();
  }
}
