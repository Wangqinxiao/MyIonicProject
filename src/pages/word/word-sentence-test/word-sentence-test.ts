import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WordResultPage } from '../word-result/word-result';


@Component({
  selector: 'page-word-sentence-test',
  templateUrl: 'word-sentence-test.html'
})
export class WordSentenceTestPage {

  theHtmlString;
  translation;
  letters;
  sentenceTextArr
  testOptions;
  underlineIndex;
  underlinesHtmls;
  answer;
  options;
  clickedOptionIndexs: number[] = [];


  getProgressCSS = function () {
    var num = 20;
    return { 'width': num + '%' };
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ngOnInit() {
    let sentence = "This is an <span class='highlight'>excellent</span> quality.";
    this.translation = "这是一种<span class='highlight'>杰出的</span>品质。";
    // process data to question format: I love to  _ _ _ _ water.
    let htmlObject = document.createElement('div');
    htmlObject.innerHTML = sentence;
    let sentenceText = htmlObject.innerText;
    this.sentenceTextArr = sentenceText.split(' ');

    let underlines = '';
    for (let i = 0; i < this.sentenceTextArr.length; i++) {
      underlines += "<span class='underline'>" + this.sentenceTextArr[i] + "</span>";
    };
    this.theHtmlString = underlines;

    //生成选项 
    let arr = this.sentenceTextArr.concat([]);
    // arr.sort(function () { return 0.5 - Math.random(); });

    arr.sort(function (a, b) {
      if (a.toLowerCase() < b.toLowerCase()) return -1;
      if (a.toLowerCase() > b.toLowerCase()) return 1;
      return 0;
    })
    this.testOptions = arr;

    this.underlineIndex = 0;
    this.underlinesHtmls = document.getElementById('writing-word-question').getElementsByClassName('underline');
  }


  getProgressCS () {
    var num = 30;
    return { 'width': num + '%' };
  }

  //选择字母填空 
  pushAnswer(optionIndex) {
    if ((this.underlineIndex < this.sentenceTextArr.length) && !(this.clickedOptionIndexs.indexOf(optionIndex) > -1)) {
      this.underlinesHtmls[this.underlineIndex].innerHTML = this.testOptions[optionIndex];
      this.underlinesHtmls[this.underlineIndex].className = this.testOptions[optionIndex] === this.sentenceTextArr[this.underlineIndex] ? 'underline right-letter' : 'underline wrong-letter';
      if (this.testOptions[optionIndex] !== this.sentenceTextArr[this.underlineIndex]) {
        this.answer = false;
      }
      if ((this.underlineIndex === this.sentenceTextArr.length - 1) && this.answer !== false) {
        this.answer = true;
      }
      this.underlineIndex++;
      this.clickedOptionIndexs.push(optionIndex);
      this.options = document.getElementsByClassName('options');
      this.options[optionIndex].className = 'word options disabled';
    }
  }

  // 退格
  backSpace() {
    if (this.underlineIndex > 0) {
      this.underlineIndex--;
      this.underlinesHtmls[this.underlineIndex].innerHTML = this.sentenceTextArr[this.underlineIndex];
      this.underlinesHtmls[this.underlineIndex].className = 'underline';
      this.options[this.clickedOptionIndexs[this.clickedOptionIndexs.length - 1]].className = 'word options';
      this.clickedOptionIndexs.splice(-1, 1);
    }
  };

  //我不会
  incapable() {
    this.answer = false;
    for (let i = 0; i < this.sentenceTextArr.length; i++) {
      this.underlinesHtmls[i].innerHTML = this.sentenceTextArr[i];
      this.underlinesHtmls[i].className = 'underline right-letter';
    }
    this.underlineIndex = this.sentenceTextArr.length;
  };
  next(item){
    this.navCtrl.push(WordResultPage, {
      item: item
    });
  };
}

