import { Component, Inject } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { OrderinfoPage } from '../orderinfo/orderinfo';
import { AppConfig, APP_CONFIG } from '../../app/app.config';
import { BuyAppAlertPage } from '../buyappalert/buyappalert';

@Component({
  selector: 'page-pickup',
  templateUrl: 'pickup.html'
})
export class PickupPage {
tab: string = "assigned";

  constructor(@Inject(APP_CONFIG) private config: AppConfig,public navCtrl: NavController,public modalCtrl: ModalController) {

  }
 orderDetail(){
     this.navCtrl.push(OrderinfoPage)
  } 
  buyThisApp(){
    let profileModal = this.modalCtrl.create(BuyAppAlertPage);
    profileModal.present();
  }
}
