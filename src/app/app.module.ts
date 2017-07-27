import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { WordPage } from '../pages/word/word';
import { OverusedWordPage } from '../pages/word/overused-word/overused-word';
import { PassiveWordPage } from '../pages/word/passive-word/passive-word';
import { WordTestPage } from '../pages/word/word-test/word-test';
import { WordResultPage } from '../pages/word/word-result/word-result';
import { WordSentenceTestPage  } from '../pages/word/word-sentence-test/word-sentence-test';
import { SentenceMakingPage } from '../pages/word/passive-word/sentence-making/sentence-making';
import { WritingTaskPage } from '../pages/writing-task/writing-task';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    WordPage,
    OverusedWordPage,
    WordTestPage,
    PassiveWordPage,
    SentenceMakingPage,
    WordSentenceTestPage,
    WordResultPage,
    WritingTaskPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    WordPage,
    OverusedWordPage,
    WordTestPage,
    PassiveWordPage,
    SentenceMakingPage,
    WordSentenceTestPage,
    WordResultPage,
    WritingTaskPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
