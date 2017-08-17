import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';;
import { PassagePreviewPage } from '../special-learn/passage/preview/passage-preview';
import { ExperiencePage } from '../special-learn/experience/experience';
import { ExpressionTaskPage } from '../special-learn/expression/task/task';

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
        pageType = ExpressionTaskPage;
        break;
      case 'experience':
        pageType = ExperiencePage;
        break;
      default:
        break;
    }
    this.navCtrl.push(pageType, {
      item: item
    });
  }


}
