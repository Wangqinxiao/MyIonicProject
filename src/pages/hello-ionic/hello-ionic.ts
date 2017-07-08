import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WordsPage } from '../words/words';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  itemTapped(event, item) {
    this.navCtrl.push(WordsPage, {
      item: item
    });
  }
}
