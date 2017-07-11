import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OverusedWordPage } from '../word/overused-word/overused-word';
import { PassiveWordPage } from '../word/passive-word/passive-word';

@Component({
  selector: 'page-word',
  templateUrl: 'word.html'
})
export class WordPage {
  type: string = 'overUsedWord';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
  itemTapped(event, item) {
    let pageType;
    switch(this.type)
    {
    case 'overUsedWord':
      pageType = OverusedWordPage;
      break;
    case 'passiveWord':
      pageType = PassiveWordPage;
      break;
    default:
      break;
    }
    this.navCtrl.push(pageType, {
      item: item
    });
  }
}
