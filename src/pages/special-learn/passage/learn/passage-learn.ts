import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { PassageTestPage } from '../test/passage-test';

@Component({
  selector: 'page-passage-learn',
  templateUrl: 'passage-learn.html'
})

export class PassageLearnPage {

  @ViewChild(Slides) slides: Slides;

  passageEn = "<span class='chunk'>Environmental protection</span> is a practice of protecting the natural environment on individual, organisation controlled or governmental levels, <span class='chunk'>for the benefit of both the environment and humans</span>. Due to the pressures of overconsumption over consumption, population and technology, the <span class='chunk'>biophysical environment</span> is being degraded, sometimes permanently. This has been recognized, and governments have begun placing restraints on activities that cause environmental degradation. Since the 1960s, activity of environmental movements has created awareness of the various environmental issues. There is no agreement on the extent of the environmental impact of human activity and even scientific dishonesty occurs, so protection measures are occasionally debated."

  passageCn = "<span class='chunk'>环境保护</span>（简称环保）是在个人、组织或政府层面，<span class='chunk'>为大自然和人类福祉</span>而保护自然环境的行为。由于工业发展导致环境污染问题过于严重，损害<span class='chunk'>生态环境</span>，部分更达到无法挽回的地步，触发各工业化国家对环境的重视，继而利用国家法律法规去规管和处理污染问题，并作出宣传使全社会注意污染对环境的深远影响。自1960年代起，环保运动已渐渐令大众更重视身边的各种环境问题。学术机构现在提供课程，如环境研究、环境管理和环境工程等，教授环境保护历史和方法。保护环境需要人类的各种活动。废物生产、空气污染、生物多样性丧失（物种入侵和灭绝所致）都是环保的相关议题。环境保护有三个相关因素：环境立法、道德与教育。这些因素都对国家环保决策和个人环境价值与行为产生影响。"

   chunks = [{ en: 'Environmental protection', cn: '环境保护' }, { en: 'for the benefit of both the environment and humans', cn: '为了环境和人类的共同利益' }, { en: 'biophysical environment', cn: '生物物理环境'},{ en: 'Environmental protection', cn: '环境保护' }, { en: 'for the benefit of both the environment and humans', cn: '为了环境和人类的共同利益' }, { en: 'biophysical environment', cn: '生物物理环境'}];

   myChunks = [{ en: 'Environmental protection', cn: '环境保护' }];

  showCn = false;
  deviceWidth = window.innerWidth;
  editChunk = false;
  chunkSelected;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public toastCtrl: ToastController) {
  }

  ngOnInit() {
    // 处理文本资源
    // let enArr = this.passageEn.split(' ');
    // enArr.map(element => {
    //   if  (){

    //   }
    // });

    // clickable.onclick = function(e){
    //   var s = window.getSelection();
    //   var range = s.getRangeAt(0);
    //   var node = s.anchorNode;
    //   while(range.toString().indexOf(' ') != 0) {                 
    //     range.setStart(node,(range.startOffset -1));
    //   }
    //   range.setStart(node, range.startOffset +1);
    //   do{
    //     range.setEnd(node,range.endOffset + 1);

    // }while(range.toString().indexOf(' ') == -1 && range.toString().trim() != '');
    // var str = range.toString().trim();
    // alert(str);
    // document.execCommand("BackColor",false,"red");
    // };
  }

  ngAfterViewInit(): void {
    let enText = document.getElementById('passageEn');
    let htmlResultEn = '';
    console.log(enText);
    for (let index = 0; index < enText.childNodes.length; index++) {
      if (enText.childNodes[index].nodeName == '#text') {
        let words = enText.childNodes[index].nodeValue.split(" ");
        let wordsResult = words.map(element => {
          let result = '<span>' + element + '</span>';
          return result;
        });
        htmlResultEn = htmlResultEn.concat(wordsResult.join(' '));
      } else {
        htmlResultEn = htmlResultEn.concat(enText.childNodes[index]['outerHTML']);
      }
    }
    enText.innerHTML = htmlResultEn;
    $('#passageEn').click(function (e) {
      $(e.target).toggleClass('underline');
      console.log(e.target);
    });

    let cnText = document.getElementById('passageCn');
    let htmlResultCn = '';
    for (let index = 0; index < cnText.childNodes.length; index++) {
      if (cnText.childNodes[index].nodeName == '#text') {
        let words = cnText.childNodes[index].nodeValue.split('');
        let wordsResult = words.map(element => {
          let result = '<span>' + element + '</span>';
          return result;
        });
        htmlResultCn = htmlResultCn.concat(wordsResult.join(''));
      } else {
        htmlResultCn = htmlResultCn.concat(cnText.childNodes[index]['outerHTML']);
      }
    }
    cnText.innerHTML = htmlResultCn;
    let that = this;
    $('#passageCn').click(function (e) {
      that.chunkSelected = true;
      $(e.target).toggleClass('underline');
      console.log(e.target);
    });
    


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

  switchTrans = function () {
    this.showCn = !this.showCn;
  }

  toggleChunkPage = function(e){
    let leftPosition = $('#chunk-page').position().left;
    if(leftPosition == 50){
      //  $("#box").animate({height:"300px"});
      $('#chunk-page').animate({left:this.deviceWidth},'fast');
    }else{
      $('#chunk-page').animate({left:"50px"},'fast');
    }
  }
  toggleEditChunk = function(){
    this.editChunk = !this.editChunk;
  }

  toggleNotePage = function(e){
    let leftPosition = $('#note-page').position().left;
    if(leftPosition == 0){
      //  $("#box").animate({height:"300px"});
      $('#note-page').animate({right:this.deviceWidth},'fast');
    }else{
      $('#note-page').animate({right:"50px"},'fast');
    }
  }

  addNote = function(){
    this.toggleNotePage();
  }

  addChunk = function(){
    if(!this.showCn ){
      this.showCn = true;
    }
    if(this.chunkSelected){
      let toast = this.toastCtrl.create({
        message: '添加成功',
        duration: 3000
      });
      toast.present();
      this.chunkSelected = false;
      return;
    }
    let confirm = this.alertCtrl.create({
      title: '添加语块指引',
      message: '点击被添加语块文字，选中后点击右下角”添加语块“按钮',
      buttons: [
        {
          text: '不再提醒',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: '好的',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  complete = function(){
    this.navCtrl.push(PassageTestPage);
  }
}
