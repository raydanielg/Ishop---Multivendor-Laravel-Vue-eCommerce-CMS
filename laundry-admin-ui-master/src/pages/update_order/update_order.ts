import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-update_order',
  templateUrl: 'update_order.html'
})
export class Update_orderPage {
  items: string = "all_items";
  categories: string = "all_categories";
  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

  }
  dismiss() {
		this.viewCtrl.dismiss();
	}

}
