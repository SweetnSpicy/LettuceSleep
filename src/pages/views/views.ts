import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { YOUTUBE_VIDEOS } from '../../mocks/youtube-content';
import { Video } from '../../models/video';

@Component({
  selector: 'page-views',
  templateUrl: 'views.html'
})
export class ViewsPage {

  videos = YOUTUBE_VIDEOS;

  constructor(public navCtrl: NavController, public videoPlayer: YoutubeVideoPlayer) { }

  playVideo(video: Video){
    this.videoPlayer.openVideo(video.videoId);
  }

}
