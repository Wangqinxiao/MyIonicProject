import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { WordPage } from '../word/word';
import { WritingTaskPage } from '../writing-task/writing-task';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {

  }
  itemTapped(event, item) {
    let page;
    switch (item) {
      case 'word':
        page = WordPage;
        break;
      case 'special': 
       
        break;
      case 'writing-task':
        page = WritingTaskPage;
        break;
      default:
      return;
    };
    this.navCtrl.push(page);
  };
  showAlert(event, type) {
    event.stopPropagation();
    let title,subTitle,message;
    switch (type) {
      case 'basic':
        title='基础语法练习';
        message = '句子转换练习<br>学习高级句式和语法的使用<br>提高语言表达丰富度';
        break;
      case 'special': 
        title='主题专项练习',
        message = '以题目为核心的主题训练<br>篇章语境中学习常用语块<br>主题高度相关预制语块学习';
        break;
      case 'task':
        title='写作任务',
        message = '定期为你准备写作题目<br>写作是最直接有效的语言输出练习<br>请尽量尝使用此前学过的表达';
        break;
      default:
      return;
    }

    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      message: message,
      buttons: ['多谢指点']
    });
    alert.present();
  }
}
