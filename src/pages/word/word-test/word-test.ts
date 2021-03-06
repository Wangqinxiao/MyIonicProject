import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { WordResultPage } from '../word-result/word-result';
import { WordSentenceTestPage  } from '../word-sentence-test/word-sentence-test';
import { ExpressionTestPage } from '../../../pages/special-learn/expression/test/test';

@Component({
  selector: 'page-word-test',
  templateUrl: 'word-test.html'
})
export class WordTestPage {
  theHtmlString;
  translation;
  letters;
  highLightWordArr;
  testOptions;
  underlineIndex;
  underlinesHtmls;
  answer;
  options;
  clickedOptionIndexs: number[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController) {

  }

  ngOnInit() {
    let sentence = "Not only could we <span class='highlight'>clean</span> up the atmosphere around the earth but could possibly be a money making mission for entrepreneurs.";
    this.translation = "这不仅仅<span class='highlight'>清理</span>了地球周围的环境，对企业家来说还有可能是一个有利可图的生意。";
  
    // 生成练习题资源
    let htmlObject = document.createElement('div');
    htmlObject.innerHTML = sentence;
    let highLightWord = htmlObject.getElementsByClassName('highlight')[0].innerHTML;
    this.highLightWordArr = highLightWord.split('');
    let underlines = '';
    for (let i = 0; i < this.highLightWordArr.length; i++) {
      underlines += "<span class='underline'>" + this.highLightWordArr[i] + "</span>";
    }
    htmlObject.getElementsByClassName('highlight')[0].innerHTML = underlines;
    let question = htmlObject.innerHTML;
    this.theHtmlString = question;
    this.letters = ['a', 'b', 'f', 'd', 'd', 'f', 'f', 'v', 'w', 'd', 'u', 'u'];

    // 随机生成字母
    let randomLen = 3;
    let randomResult = [];
    for (let j = 0; j < randomLen; j++) {
      let ranNum = Math.ceil(Math.random() * 25);
      randomResult.push(String.fromCharCode(65 + ranNum).toLowerCase());
    };

    //生成选项 
    let arr = this.highLightWordArr.concat(randomResult);
    // arr.sort(function () { return 0.5 - Math.random(); });

    arr.sort(function (a, b) {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    })
    this.testOptions = arr;

    this.underlineIndex = 0;
    this.underlinesHtmls = document.getElementById('writing-word-question').getElementsByClassName('underline');
  }


  getProgressCSS = function () {
    var num = 30;
    return { 'width': num + '%' };
  }

  //选择字母填空 

  pushAnswer(optionIndex) {
    if ((this.underlineIndex < this.highLightWordArr.length) && !(this.clickedOptionIndexs.indexOf(optionIndex) > -1)) {
      this.underlinesHtmls[this.underlineIndex].innerHTML = this.testOptions[optionIndex];
      this.underlinesHtmls[this.underlineIndex].className = this.testOptions[optionIndex] === this.highLightWordArr[this.underlineIndex] ? 'underline right-letter' : 'underline wrong-letter';
      if (this.testOptions[optionIndex] !== this.highLightWordArr[this.underlineIndex]) {
        this.answer = false;
      }
      if ((this.underlineIndex === this.highLightWordArr.length - 1) && this.answer !== false) {
        this.answer = true;
      }
      this.underlineIndex++;
      this.clickedOptionIndexs.push(optionIndex);
      this.options = document.getElementsByClassName('options');
      this.options[optionIndex].className = 'options disabled';
    }
  }

  // 退格
  backSpace() {
    if (this.underlineIndex > 0) {
      this.underlineIndex--;
      this.underlinesHtmls[this.underlineIndex].innerHTML = this.highLightWordArr[this.underlineIndex];
      this.underlinesHtmls[this.underlineIndex].className = 'underline';
      this.options[this.clickedOptionIndexs[this.clickedOptionIndexs.length - 1]].className = 'options';
      this.clickedOptionIndexs.splice(-1, 1);
    }
  };

  //我不会
  incapable() {
    this.answer = false;
    for (let i = 0; i < this.highLightWordArr.length; i++) {
      this.underlinesHtmls[i].innerHTML = this.highLightWordArr[i];
      this.underlinesHtmls[i].className = 'underline right-letter';
    }
    this.underlineIndex = this.highLightWordArr.length;
  };

  next(item){
    this.navCtrl.push(ExpressionTestPage, {
      item: item
    });
  }

 
  testDOMB(){
    let thereHtmls = document.getElementById('there');
    for (let i = 0; i < 50; i++) {
      thereHtmls.innerHTML =  'There is a handSome boy,There is a handSome boy,There is a handSome boy,There is a handSome boy,There is a handSome boy,There is a handSome boy,There is a handSome boy,There is a handSome boy,There is a handSome boy,There is a handSome boy';
    }
    let toast = this.toastCtrl.create({
      message: 'doneB',
      duration: 500,
      position: 'top',
    });
    toast.present();
  }

   testDOMA(){
    let thereHtmls = document.getElementById('there');
    for (let i = 0; i < 50; i++) {
      thereHtmls.className =  'underline right-letter';
    }
    let toast = this.toastCtrl.create({
      message: 'doneA',
      duration: 500,
      position: 'top',
    });
    toast.present();


  }

}
