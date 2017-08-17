import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SpecialLearnPage } from '../../../pages/special-learn/special-learn';


@Component({
  selector: 'page-word-result',
  templateUrl: 'word-result.html'
})
export class WordResultPage {

  
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ngOnInit() {
   
  }

  backHome = function(){
    this.navCtrl.push(SpecialLearnPage);
  }


}

