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
import { SpecialLearnPage } from '../pages/special-learn/special-learn';
import { PassagePreviewPage } from '../pages/special-learn/passage/preview/passage-preview';
import { PassageLearnPage } from '../pages/special-learn/passage/learn/passage-learn';
import { PassageTestPage } from '../pages/special-learn/passage/test/passage-test';
import { PassageResultPage } from '../pages/special-learn/passage/result/passage-result';
import { ExperiencePage } from '../pages/special-learn/experience/experience';
import { ExpressionTaskPage } from '../pages/special-learn/expression/task/task';
import { ExpressionLearnPage } from '../pages/special-learn/expression/learn/learn';
import { ExpressionReviewPage } from '../pages/special-learn/expression/review/review';
import { ExpressionTestPage } from '../pages/special-learn/expression/test/test';

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
    WritingTaskPage,
    SpecialLearnPage,
    PassagePreviewPage,
    PassageLearnPage,
    PassageTestPage,
    PassageResultPage,
    ExperiencePage,
    ExpressionTaskPage,
    ExpressionLearnPage,
    ExpressionReviewPage,
    ExpressionTestPage  
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
    WritingTaskPage,
    SpecialLearnPage,
    PassagePreviewPage,
    PassageLearnPage,
    PassageTestPage,
    PassageResultPage,
    ExperiencePage,
    ExpressionTaskPage,
    ExpressionLearnPage,
    ExpressionReviewPage,
    ExpressionTestPage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
