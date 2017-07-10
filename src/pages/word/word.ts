import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OverusedWordPage } from '../word/overused-word/overused-word';
@Component({
  selector: 'page-word',
  templateUrl: 'word.html'
})
export class WordPage {
  type: string = 'overUsedWord';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
  itemTapped(event, item) {
    this.navCtrl.push(OverusedWordPage, {
      item: item
    });
  }
}
