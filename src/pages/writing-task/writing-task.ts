import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HelloIonicPage } from '../hello-ionic/hello-ionic';

@Component({
  selector: 'page-writing-task',
  templateUrl: 'writing-task.html'
})
export class WritingTaskPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  back(){
    this.navCtrl.push(HelloIonicPage);
  }

}
