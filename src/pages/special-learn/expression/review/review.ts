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
  tasks: object[] = [{en:'Industrial emissions',cn:'工业排放物'},{en:'slow down the rate of resource degradation',cn:'降低资源消耗率'},{en:'comply with',cn:'遵从'},{en:'harmful substances',cn:'有害物质'},{en:'lead a low-carbon life',cn:'过低碳的生活'},{en:'Behind them all, though, is the contradiction between economic growth and the environment.',cn:'所有这一切的背后是经济增长和环境保护之间的矛盾'},{en:'with the improvement of our living standard',cn:'随着我们的生活水平的提高'},{en:'clean up',cn:'清理'}];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  next = function(){
     this.navCtrl.push(WordResultPage);
  }


}
