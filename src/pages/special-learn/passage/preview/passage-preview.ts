import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { PassageLearnPage } from '../learn/passage-learn';


@Component({
  selector: 'page-passage-preview',
  templateUrl: 'passage-preview.html'
})

export class PassagePreviewPage {

  @ViewChild(Slides) slides: Slides;

   chunks = [{ en: 'both meaningful and instructive', cn: '意味深长而发人深省' },{ en: 'The pictures serve to remind us that', cn: '这幅漫画是为了提醒我们' },{ en: 'guarantee the comfort and safety of generations to come', cn: '确保我们后代的幸福和平安' }, { en: 'Sustainable development', cn: '可持续发展' }, { en: 'it is justifiable to', cn: '无可厚非'},{en:'in the interest of making a profit',cn:'为了获得利润'}];


  progressText = 1 + '/' + this.chunks.length;

constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
}

ngOnInit() {
}

next = function () {
  this.slides.slideNext(200);
  if(this.slides.isEnd()){
     this.navCtrl.push(PassageLearnPage);
  }
}

previous = function () {
  this.slides.slidePrev(200);
}

mastered = function () {
  this.next();
}

showAlert = function (event) {
  event.stopPropagation();
  let alert = this.alertCtrl.create({
    title: '语块预习',
    subTitle: '',
    message: '快速预览篇章学习中的关键语块<p>选择“太熟了”，表示您已经充分掌握了该语块的使用，系统会将该语块从学习任务中删除<br>选择“下一个”，或向右滑动，预览下一个语块<br>',
    buttons: ['多谢指点']
  });
  alert.present();
}

getProgressCSS = function () {
  let currentIndex = this.slides.getActiveIndex();
  let chunksLen = this.chunks.length;
  let percentageNum = (currentIndex+1) / chunksLen * 100;
  return { 'width': percentageNum + '%' };
}

getProgressText = function (){
  this.progressText =  this.slides.getActiveIndex() + 1 + '/' + this.chunks.length;
  return this.progressText;
}

}
