import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { WordTestPage } from '../word-test/word-test';

@Component({
  selector: 'page-overused-word',
  templateUrl: 'overused-word.html'
})
export class OverusedWordPage {
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
  know(){
    let toast = this.toastCtrl.create({
      message: '已把该单词从学习列表中移除',
      duration: 2000,
      position: 'top',
    });
    toast.present();
  }
  next() {
    this.navCtrl.push(WordTestPage);
  }
}
