import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TimerPage } from '../timer/timer';
import { timer } from 'rxjs/observable/timer';
//import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController/*,  private iab: InAppBrowser*/) { }

  private pages = [
    {
      title: "Uberman",
      link: "https://www.polyphasicsociety.com/polyphasic-sleep/overviews/uberman-2/",
      desc: "20 minute naps, spaced equidistant throughout the day. Supposed to push you into REM naps that make you feel refreshed and energized for 22 hours a day."
    }, {
      title: "Everyman 3",
      link: "http://www.polyphasicsociety.com/polyphasic-sleep/overviews/everyman/",
      desc: "Like the ubermann, but your sleep is 3, 20 minute naps for 12 hours. Then a 3 hour chunk of sleep at night time."
    }, {
      title: "Dymaxion",
      link: "https://www.polyphasicsociety.com/polyphasic-sleep/overviews/dymaxion/",
      desc: "Essentially the Ubermann but with 4x30 min naps instead of 6x20min naps."
    }, {
      title: "Biphasic",
      link: "https://www.healthline.com/health/biphasic-sleep",
      desc: "The most natural of all sleep schedules. A lot of mammals in the wild sleep like this, and make use of the regenerative effects of a nice midday nap."
    }, {
      title: "Everyman 2: Jeub",
      link: "http://chrisjeub.com/my-fascinating-4-hour-sleep-schedule/",
      desc: "An edit to the original Everyman, where a nap was eliminated"
    }, {
      title: "Polyphasic",
      link: "https://www.supermemo.com/en/articles/polyphasic",
      desc: "This is just a blanket sleep schedule consisting of being asleep multiple times a day. Babies are polyphasic sleepers, as are domesticated animals normally."
    }
  ];

  public openBrowser(str:string) {
    window.open(str,'_system', 'location=yes');
  }

  public goToClockPage(){
    this.navCtrl.push(TimerPage);
  }

}
