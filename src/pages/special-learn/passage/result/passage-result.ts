import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SpecialLearnPage } from '../../../../pages/special-learn/special-learn';


@Component({
  selector: 'page-passage-result',
  templateUrl: 'passage-result.html'
})
export class PassageResultPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ngOnInit() {

  }

  backHome = function () {
    this.navCtrl.push(SpecialLearnPage);
  }



}

