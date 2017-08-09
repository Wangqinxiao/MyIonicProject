import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';;
import { PassagePreviewPage } from '../special-learn/passage/preview/passage-preview';

@Component({
  selector: 'page-special-learn',
  templateUrl: 'special-learn.html'
})
export class SpecialLearnPage {
  type: string = 'passage-learn';
  showCn: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  doExcercise(event, item) {
    let pageType;
    switch (item) {
      case 'passage':
        pageType = PassagePreviewPage;
        break;
      case 'expression':
        pageType = '';
        break;
      default:
        break;
    }
    this.navCtrl.push(pageType, {
      item: item
    });
  }
  

}
