import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { PassageTestPage } from '../test/passage-test';
import { PassageLearnPage1 } from '../learn1/passage-learn1';

@Component({
  selector: 'page-passage-learn',
  templateUrl: 'passage-learn.html'
})

export class PassageLearnPage {

  @ViewChild(Slides) slides: Slides;

  passageEn1 = "<span class='chunk'>Environmental protection</span> is a practice of protecting the natural environment on individual, organisation controlled or governmental levels, <span class='chunk'>for the benefit of both the environment and humans</span>. Due to the pressures of overconsumption over consumption, population and technology, the <span class='chunk'>biophysical environment</span> is being degraded, sometimes permanently. This has been recognized, and governments have begun placing restraints on activities that cause environmental degradation. Since the 1960s, activity of environmental movements has created awareness of the various environmental issues. There is no agreement on the extent of the environmental impact of human activity and even scientific dishonesty occurs, so protection measures are occasionally debated."

  passageEn = "<p>The images above are <span class='chunk'>both meaningful and instructive</span>: this man's hard work is not only for his own benefit, but also for the benefit of future generations. <span class='chunk'>The pictures serve to remind us that</span> the existence of our current happiness and valuable national heritage is due to the struggles of our predecessors.</p><p>We, in turn, should also work hard in order to <span class='chunk'>guarantee the comfort and safety of generations to come</span>. <span class='chunk'>Sustainable development</span> has become a topic of heated debate in recent years. While <span class='chunk'>it is justifiable to</span> satisfy current demands, we cannot neglect the needs of our descendants in the process. Our children also depend on Earth's natural resources and we should not deprive them of such necessities. Unfortunately, many people only think of their short term, personal interests. An entire forest might be clear cut,<span class='chunk'>in the interest of making a profit</span>, without a single tree planted in its place. This inconsiderate attitude towards the welfare of our descendants, as well the indifference to the outcome of such reckless actions, can only turn Earth into a cold and lifeless planet.</p><p>People must be taught to appreciate Earth as not only their home, but also the home of our children and grandchildren, as well as all other plants and animals. While making great efforts to increase our current quality of life, we must simultaneously consider how our actions will affect future lives.</p>"

  passageCn = "<p>上面的漫画<span class='chunk-cn'>意味深长而发人深省</span>，栽树人的艰辛劳作不只是为了他自己，也是为了后人。<span class='chunk-cn'>这幅漫画是为了提醒我们</span>今天的幸福生活和宝贵的民族遗产归功于我们祖先的奋斗。</p><p class='selectable'>The images above are <span class='chunk'>both <span class='dict'>meaningful</span> and instructive</span>: this man's hard work is not only for his own benefit, but also for the benefit of future generations. <span class='chunk'>The pictures serve to remind us that</span> the existence of our current happiness and valuable national heritage is due to the struggles of our predecessors.</p><p>而我们，反过来，也要努力劳动来<span class='chunk-cn'>确保我们后代的幸福和平安</span>。<span class='chunk-cn'>可持续发展</span>是近几年的热点话题，虽然我们满足自己当前的需要<span class='chunk'>无可厚非</span>，但不能将子孙后代的需求抛置脑后。我们的孩子同样需要自然资源，我们不能<span class='add-chunk'><span class='addTip' onclick='addChunk()'>添加语块</span>剥夺他们的</span>这份必需品。不幸的是很多人只考虑他们短视的、自私的利益。<span class='chunk-cn'>为了获得利润</span>，整片的森林被砍光，一棵树都不留下。这种不顾及子孙福利的态度，和对这种轻率行为的后果的无动于衷，只会让我们的地球变成一个冷冰冰而无生气的行星。</p><p>We, in turn, should also work hard in order to <span class='chunk'>guarantee the comfort and safety of generations to come</span>. <span class='chunk'>Sustainable development</span> has become a topic of heated debate in recent years. While <span class='chunk'>it is justifiable to</span> satisfy current demands, we cannot neglect the needs of our descendants in the process. Our children also depend on Earth's natural resources and we should not <span class='add-chunk'>deprive them of</span> such necessities. Unfortunately, many people only think of their short term, personal interests. An entire forest might be clear cut,<span class='chunk'>in the interest of making a profit</span>, without a single tree planted in its place. This inconsiderate attitude towards the welfare of our descendants, as well the indifference to the outcome of such reckless actions, can only turn Earth into a cold and lifeless planet.</p><p>必须告诫人们的是：地球不仅是他们的家园，也是他们的孩子和所有后代的家园，还是其他所有的植物和动物的家园。在努力提高今天的生活质量的同时，我们必须考虑到我们的行为会对未来的生命产生什么样的影响。</p><p>People must be taught to appreciate Earth as not only their home, but also the home of our children and grandchildren, as well as all other plants and animals. While making great efforts to increase our current quality of life, we must simultaneously consider how our actions will affect future lives.</p>"

  passageHTml = this.passageEn;
  dict = false;

   chunks = [{ en: 'both meaningful and instructive', cn: '意味深长而发人深省' },{ en: 'The pictures serve to remind us that', cn: '这幅漫画是为了提醒我们' },{ en: 'guarantee the comfort and safety of generations to come', cn: '确保我们后代的幸福和平安' }, { en: 'Sustainable development', cn: '可持续发展' }, { en: 'it is justifiable to', cn: '无可厚非'},{en:'in the interest of making a profit',cn:'为了获得利润'}];

   myChunks = [{ en: 'deprive them of', cn: '剥夺他们的' }];

  showCn = false;
  deviceWidth = window.innerWidth;
  editChunk = false;
  chunkSelected;
  pet = 'note';
  notifications = 'enable';

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
        let that = this;
    $('.add-tip').click(function (e) {
      let toast = that.toastCtrl.create({
        message: '语块添加成功',
        duration: 3000
      });
      toast.present();
    });
  }

  ngAfterViewInit(): void {
    let enText = document.getElementById('passageEn').getElementsByTagName('p')[1];
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
    $('.passageEn').click(function (e) {
      $(e.target).toggleClass('underline');
      console.log(e.target);
    });

  

    // let cnText = document.getElementById('passageCn').getElementsByTagName('p')[1];;
    // let htmlResultCn = '';
    // for (let index = 0; index < cnText.childNodes.length; index++) {
    //   if (cnText.childNodes[index].nodeName == '#text') {
    //     let words = cnText.childNodes[index].nodeValue.split('');
    //     let wordsResult = words.map(element => {
    //       let result = '<span>' + element + '</span>';
    //       return result;
    //     });
    //     htmlResultCn = htmlResultCn.concat(wordsResult.join(''));
    //   } else {
    //     htmlResultCn = htmlResultCn.concat(cnText.childNodes[index]['outerHTML']);
    //   }
    // }
    // cnText.innerHTML = htmlResultCn;
    // let that = this;
    // $('#passageCn').click(function (e) {
    //   that.chunkSelected = true;
    //   $(e.target).toggleClass('underline');
    //   console.log(e.target);
    // });
    


  }


  showAlert = function (event) {
    event.stopPropagation();
    let alert = this.alertCtrl.create({
      title: '范文语块预习',
      subTitle: '',
      message: '快速预览篇章学习中的关键语块<p>选择“太熟了”，表示您已经充分掌握了该语块的使用，系统会将该语块从学习任务中删除<br>选择“下一个”，或向右滑动，预览下一个语块<br>',
      buttons: ['多谢指点']
    });
    alert.present();
  }

  switchTrans = function () {

    if( this.passageHTml === this.passageEn){
      this.passageHTml = this.passageCn;
    }else{
      this.passageHTml = this.passageEn;
    }
    let enText = document.getElementById('passageEn').getElementsByTagName('p')[1];
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
    let that = this;
    enText.innerHTML = htmlResultEn;
    $('#passageEn').click(function (e) {
      $(e.target).toggleClass('underline');
      console.log(e.target.innerHTML); 
      if(e.target.innerHTML == '添加语块'){
        that.addChunk();
         $(".add-chunk").addClass("chunk");
         $(".addTip").css("display","none");
      }
    }); 
    $('.addTip').click(function (e) {
      let toast = that.toastCtrl.create({
        message: '语块添加成功',
        duration: 3000
      });
      toast.present();
    });
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

  setNote = function(){
    this.toggleNotePage();
  }
  setChunk = function(){
    this.toggleChunkPage();
  }


  addChunk = function(){
    let toast = this.toastCtrl.create({
      message: '语块添加成功',
      duration: 3000
    });
    toast.present();
    // if(!this.showCn ){
    //   this.showCn = true;
    // }
    // if(this.chunkSelected){
    //   let toast = this.toastCtrl.create({
    //     message: '添加成功',
    //     duration: 3000
    //   });
    //   toast.present();
    //   this.chunkSelected = false;
    //   return;
    // }
    // let confirm = this.alertCtrl.create({
    //   title: '添加语块指引',
    //   message: '点击被添加语块文字，选中后点击右下角”添加语块“按钮',
    //   buttons: [
    //     {
    //       text: '不再提醒',
    //       handler: () => {
    //         console.log('Disagree clicked');
    //       }
    //     },
    //     {
    //       text: '好的',
    //       handler: () => {
    //         console.log('Agree clicked');
    //       }
    //     }
    //   ]
    // });
    // confirm.present();
  }

  complete = function(){
    this.navCtrl.push(PassageLearnPage1);
  }

  showDict(){
    this.dict = true;
  }

  closeDict(){
    this.dict = false;
  }

}
