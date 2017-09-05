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
  tasks: object[] = [{en:'Industrial emissions',cn:'工业排放物'},{en:'slow down the rate of resource degradation',cn:'降低资源消耗率'},{en:'comply with',cn:'遵从'},{en:'clean up',cn:'清理'},{en:'Behind them all, though, is the contradiction between economic growth and the environment.',cn:'所有这一切的背后是经济增长和环境保护之间的矛盾'},];

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
