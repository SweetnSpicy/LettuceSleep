import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TunesPage } from '../pages/tunes/tunes';
import { ViewsPage } from '../pages/views/views';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TimerPage } from '../pages/timer/timer';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { File } from '@ionic-native/file/ngx';
import { Media } from '@ionic-native/media/ngx';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

@NgModule({
  declarations: [
    MyApp,
    TunesPage,
    ViewsPage,
    HomePage,
    TabsPage,
    TimerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TunesPage,
    ViewsPage,
    HomePage,
    TabsPage,
    TimerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    Media,
    YoutubeVideoPlayer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
