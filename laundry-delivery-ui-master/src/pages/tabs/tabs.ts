import { Component } from '@angular/core';
import { AccountPage } from '../account/account';
import { EarningsPage } from '../earnings/earnings';
import { NotificationPage } from '../notification/notification';
import { PickupPage } from '../pickup/pickup';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

 tab1Root = PickupPage;
  tab2Root = NotificationPage;
  tab3Root = EarningsPage;
  tab4Root = AccountPage;
  constructor() {

  }
}
