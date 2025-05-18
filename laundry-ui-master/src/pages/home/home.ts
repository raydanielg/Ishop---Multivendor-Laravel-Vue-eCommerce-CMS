import { Component, Inject } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { SelectclothesPage } from '../selectclothes/selectclothes';
import { BuyAppAlertPage } from '../buyappalert/buyappalert';
import { AppConfig, APP_CONFIG } from '../../app/app.config';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  slides = [
    {
      image: "assets/imgs/banner.png",
      title: "Flat 50% off on <br>First Order",
    },
    {
      image: "assets/imgs/banner.png",
      title: "Flat 50% off on <br>First Order",
    },
    {
      image: "assets/imgs/banner.png",
      title: "Flat 50% off on <br>First Order",
    }
  ];

  services = [
    {
      image: "assets/imgs/washing.png",
      title: "Wash & Fold",
      small: "Min 12 Hours",
    },
    {
      image: "assets/imgs/iron.png",
      title: "Wash & Iorn",
      small: "Min 6 Hours",
    },
    {
      image: "assets/imgs/dryclean.png",
      title: "Dry Clean",
      small: "Min 24 Hours",
    }
  ];

  constructor(@Inject(APP_CONFIG) private config: AppConfig,public navCtrl: NavController,public modalCtrl: ModalController) {

  }

  selectclothes() {
    this.navCtrl.push(SelectclothesPage)
  }
  buyThisApp(){
    let profileModal = this.modalCtrl.create(BuyAppAlertPage);
    profileModal.present();
  }
}
