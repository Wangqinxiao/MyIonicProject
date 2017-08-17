import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';;


@Component({
  selector: 'page-experience',
  templateUrl: 'experience.html'
})
export class ExperiencePage {
  type: string = 'passage-learn';
  showCn: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }


}
