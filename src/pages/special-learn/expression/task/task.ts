import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ExpressionLearnPage } from '../../../special-learn/expression/learn/learn';


@Component({
  selector: 'page-expression-task',
  templateUrl: 'task.html'
})
export class ExpressionTaskPage {
  type: string = 'overUsedWord';
  status: string = 'init';
  passiveWords: string[] = ['outlook', 'skitish', 'comply with', 'reasons are listed as follows', 'In a word'];
  overUsedWords: object[] = [
    {
      word: 'good', subWords: [
        { word: 'excellent' },
        { word: 'brilliant' }
      ]
    },
    {
      word: 'beautiful', subWords:
      [
        { word: 'fair' },
        { word: 'seraphic'},
      ]
    }
  ];
  getProgressCSS = function () {
    var num = 20;
    return { 'width': num + '%' };
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  itemTapped(event, item) {
    this.navCtrl.push(ExpressionLearnPage, {
      item: item
    });
  }

  screen() {
    this.status = 'screening';
  }
  screenDone() {
    this.status = 'init';
  }
}
