import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ChatsPage } from '../chats/chats';
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html'
})
export class MessagesPage { 
  constructor(public navCtrl: NavController) {

  }
   

chats(){
    this.navCtrl.push(ChatsPage)
  }

}
