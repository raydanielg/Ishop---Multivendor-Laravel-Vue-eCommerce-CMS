import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-myorders',
  templateUrl: 'myorders.html'
})
export class MyordersPage {
 items = [
    {
      image: "assets/imgs/confirmed.png",
      title: "Order Confirmed",
      detail: "Your order No. 123456345 is confirmed now. pick up guy will reach on selected date & time.",
      time: "12:00 pm",
    },
    {
      image: "assets/imgs/dispatched.png",
      title: "Order Ready to Deliver",
      detail: "Your order No. 123456345 is confirmed now. pick up guy will reach on selected date & time.",
      time: "12:00 pm",
    },
    {
      image: "assets/imgs/inporcess.png",
      title: "Order is under process",
      detail: "Your order No. 123456345 is confirmed now. pick up guy will reach on selected date & time.",
      time: "12:00 pm",
    },
    {
      image: "assets/imgs/delivered.png",
      title: "Order Delivered",
      detail: "Your order No. 123456345 is confirmed now. pick up guy will reach on selected date & time.",
      time: "12:00 pm",
    }
    ,
    {
      image: "assets/imgs/dispatched.png",
      title: "Order Ready to Deliver",
      detail: "Your order No. 123456345 is confirmed now. pick up guy will reach on selected date & time.",
      time: "12:00 pm",
    },
    {
      image: "assets/imgs/inporcess.png",
      title: "Order is under process",
      detail: "Your order No. 123456345 is confirmed now. pick up guy will reach on selected date & time.",
      time: "12:00 pm",
    },
    {
      image: "assets/imgs/delivered.png",
      title: "Order Delivered",
      detail: "Your order No. 123456345 is confirmed now. pick up guy will reach on selected date & time.",
      time: "12:00 pm",
    }
  ];

  constructor(public navCtrl: NavController) {

  }
  

}
