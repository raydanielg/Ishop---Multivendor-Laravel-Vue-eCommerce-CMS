import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {OrdersinfoPage } from '../ordersinfo/ordersinfo';
@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html'
})
export class OrdersPage {
  orders: string = "pending";
  
  constructor(public navCtrl: NavController) {

  }
  
ordersinfo(){
        this.navCtrl.push(OrdersinfoPage)
  }

}
