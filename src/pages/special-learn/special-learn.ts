import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';;
import { ToastController } from 'ionic-angular';

import { PassagePreviewPage } from '../special-learn/passage/preview/passage-preview';
import { ExperiencePage } from '../special-learn/experience/experience';
import { ExpressionTaskPage } from '../special-learn/expression/task/task';


@Component({
  selector: 'page-special-learn',
  templateUrl: 'special-learn.html'
})
export class SpecialLearnPage {
  type: string = 'passage-learn';
  showCn: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {

  }

  doExcercise(event, item) {
    let pageType;
    switch (item) {
      case 'passage':
        pageType = PassagePreviewPage;
        break;
      case 'expression':
        pageType = ExpressionTaskPage;
        break;
      case 'experience':
        pageType = ExperiencePage;
        break;
      default:
        break;
    }
    this.navCtrl.push(pageType, {
      item: item
    });
  }

  testDOMB() {
    let toast = this.toastCtrl.create({
      message: 'done',
      duration: 500,
      position: 'top',
    });
    toast.present();
    let a = 30;
    let iCount = setInterval(function () {
      if(!a){
        clearInterval(iCount);
      }
      document.getElementById('bla').style.display = 'none';
      setTimeout(function () {
        document.getElementById('bla').style.display = 'block';
      }, 100);
      a--;
    }, 200);
    let iCcount1 = setInterval(function () {
      if(!a){
        clearInterval(iCcount1);
      }
      document.getElementById('here').innerHTML = "lalal";
      for (let count = 0; count < 1500; count++) {
        document.getElementById('here').innerHTML += 'a';
      }
    }, 2000);
  }
  testDOMA() {
    let toast = this.toastCtrl.create({
      message: 'done',
      duration: 500,
      position: 'top',
    });
    toast.present();
    let a = 15;
    let iCount = setInterval(function () {
       if(!a){
        clearInterval(iCount);
      }
      document.getElementById('bla').style.visibility = 'hidden';
      setTimeout(function () {
        document.getElementById('bla').style.visibility = 'visible';
      }, 100);
      a--;
    }, 200);

    let iCcount1 = setInterval(function () {
      if(!a){
        clearInterval(iCcount1);
      }
      document.getElementById('here').innerHTML = "lfffl";
      var content = '';
      for (let count = 0; count < 1500; count++) {
        content += 'a';
      }
      document.getElementById('here').innerHTML += content;
    }, 2000);
    let iCcount2 = setInterval(function () {
      if(!a){
        clearInterval(iCcount2);
      }
      document.getElementById('here').innerHTML = "lalal";
      for (let count = 0; count < 150; count++) {
        document.getElementById('here').innerHTML += 'a';
      }
    }, 2000);
  }
}
