import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OverusedWordsPage } from '../words/overused-words/overused-words';
@Component({
  selector: 'page-words',
  templateUrl: 'words.html'
})
export class WordsPage {
  type: string = 'overUsedWords';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
  itemTapped(event, item) {
    this.navCtrl.push(OverusedWordsPage, {
      item: item
    });
  }
}
