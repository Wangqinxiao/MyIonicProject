import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-sentence-making',
  templateUrl: 'sentence-making.html'
})
export class SentenceMakingPage {
  type: string = 'usage';
  addType: string = 'sentence-making';
  getProgressCSS = function () {
    var num = 20;
    return { 'width': num + '%' };
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {

  }
  presentToast(type) {
    let toast = this.toastCtrl.create({
      message: '添加到' + type + '成功！',
      duration: 2000,
      position: 'top',
    });
    toast.present();
  };
  ngOnInit(){
    this.addType = this.navParams.get('item');;
  }
}
