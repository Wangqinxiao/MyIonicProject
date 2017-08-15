import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { PassageResultPage } from '../result/passage-result'

@Component({
  selector: 'page-passage-test',
  templateUrl: 'passage-test.html'
})

export class PassageTestPage {

  @ViewChild(Slides) slides: Slides;

  passageEn = "<span class='chunk'>Environmental protection</span> is a practice of protecting the natural environment on individual, organisation controlled or governmental levels, <span class='chunk'>for the benefit of both the environment and humans</span>. Due to the pressures of overconsumption over consumption, population and technology, the <span class='chunk'>biophysical environment</span> is being degraded, sometimes permanently. This has been recognized, and governments have begun placing restraints on activities that cause environmental degradation. Since the 1960s, activity of environmental movements has created awareness of the various environmental issues. There is no agreement on the extent of the environmental impact of human activity and even scientific dishonesty occurs, so protection measures are occasionally debated."

  passageCn = "<span class='chunk'>环境保护</span>（简称环保）是在个人、组织或政府层面，<span class='chunk'>为大自然和人类福祉</span>而保护自然环境的行为。由于工业发展导致环境污染问题过于严重，损害<span class='chunk'>生态环境</span>，部分更达到无法挽回的地步，触发各工业化国家对环境的重视，继而利用国家法律法规去规管和处理污染问题，并作出宣传使全社会注意污染对环境的深远影响。自1960年代起，环保运动已渐渐令大众更重视身边的各种环境问题。学术机构现在提供课程，如环境研究、环境管理和环境工程等，教授环境保护历史和方法。保护环境需要人类的各种活动。废物生产、空气污染、生物多样性丧失（物种入侵和灭绝所致）都是环保的相关议题。环境保护有三个相关因素：环境立法、道德与教育。这些因素都对国家环保决策和个人环境价值与行为产生影响。"

  passageEnHtml;
  passageCnHtml;
  testOptions = [];
  chunkIndex = 0;
  underlineIndex = 0;
  underlinesHtmls;
  clickedOptionIndexs: number[] = [];
  htmlObjectEn;
  htmlObjectCn;
  options;

  deviceWidth = window.innerWidth;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ngOnInit() {

    // process data to question format: I ___ ___ ___ water, you ___ ___ ___ milk. 
    this.htmlObjectEn = document.createElement('div');
    this.htmlObjectEn.innerHTML = this.passageEn;
    let chunks = this.htmlObjectEn.getElementsByClassName("chunk");
    for (let i = 0; i < chunks.length; i++) {
      let underlines = '';
      let chunkString = chunks[i].innerHTML.split(' ');

      // 生成选项并按首字母排序
      let arr = chunkString.concat([]);
      arr.sort(function (a, b) {
        if (a.toLowerCase() < b.toLowerCase()) return -1;
        if (a.toLowerCase() > b.toLowerCase()) return 1;
        return 0;
      })
      this.testOptions[i] = arr;

      for (var j = 0; j < chunkString.length; j++) {
        underlines += "<span class='underline'>" + chunkString[j] + '</span>';
      }
      chunks[i].innerHTML = underlines;
    }
    this.passageEnHtml = this.htmlObjectEn.innerHTML;

    this.htmlObjectCn = document.createElement('div');
    this.htmlObjectCn.innerHTML = this.passageCn;
    let cnChunks = this.htmlObjectCn.getElementsByClassName('chunk');
    cnChunks[this.chunkIndex].className = 'chunk color-blue';
    this.passageCnHtml = this.htmlObjectCn.innerHTML;

    this.underlinesHtmls = this.htmlObjectEn.getElementsByClassName('chunk')[this.chunkIndex].getElementsByClassName('underline');
  }


  ngAfterViewInit(): void {

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

  // 选择答案
  pushAnswer(optionIndex) {
    if ((this.underlineIndex < this.testOptions[this.chunkIndex].length) && !(this.clickedOptionIndexs.indexOf(optionIndex) > -1)) {
      this.underlinesHtmls[this.underlineIndex].className = this.testOptions[this.chunkIndex][optionIndex] === this.underlinesHtmls[this.underlineIndex].innerHTML ? 'underline right-letter' : 'underline wrong-letter';
      this.underlinesHtmls[this.underlineIndex].innerHTML = this.testOptions[this.chunkIndex][optionIndex];
      console.log(this.htmlObjectEn);
      this.passageEnHtml = this.htmlObjectEn.innerHTML;
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
      this.underlinesHtmls[this.underlineIndex].innerHTML = this.testOptions[this.chunkIndex][this.underlineIndex];
      this.underlinesHtmls[this.underlineIndex].className = 'underline';
      this.passageEnHtml = this.htmlObjectEn.innerHTML;
      this.options[this.clickedOptionIndexs[this.clickedOptionIndexs.length - 1]].className = 'word options';
      this.clickedOptionIndexs.splice(-1, 1);
    }
  };


  //我不会
  incapable() {
    for (let i = 0; i < this.testOptions[this.chunkIndex].length; i++) {
      this.underlinesHtmls[i].innerHTML = this.testOptions[this.chunkIndex][i];
      this.underlinesHtmls[i].className = 'underline right-letter';
      this.passageEnHtml = this.htmlObjectEn.innerHTML;
    }
    this.underlineIndex = this.testOptions[this.chunkIndex].length;
  };

  // nextChunk
  nextChunk() {
    if (this.chunkIndex >= this.testOptions.length - 1) {
      this.next();
      return;
    }
    this.chunkIndex++;
    this.underlineIndex = 0;
    this.underlinesHtmls;
    this.clickedOptionIndexs = [];
    this.htmlObjectEn;
    this.options;
    this.underlinesHtmls = this.htmlObjectEn.getElementsByClassName('chunk')[this.chunkIndex].getElementsByClassName('underline');
    let cnChunks = this.htmlObjectCn.getElementsByClassName('chunk');
    cnChunks[this.chunkIndex].className = 'chunk color-blue';
    cnChunks[this.chunkIndex - 1].className = 'chunk';
    this.passageCnHtml = this.htmlObjectCn.innerHTML;
  }


  next() {
    this.navCtrl.push(PassageResultPage);
  };


}
