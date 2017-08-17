import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WordResultPage } from '../../../../pages/word/word-result/word-result';


@Component({
  selector: 'page-expression-review',
  templateUrl: 'review.html'
})
export class ExpressionReviewPage {
  type: string = 'passage-learn';
  showCn: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  next = function(){
     this.navCtrl.push(WordResultPage);
  }


}
