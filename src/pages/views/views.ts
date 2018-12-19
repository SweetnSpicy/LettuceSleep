import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { YOUTUBE_VIDEOS } from '../../mocks/youtube-content';
import { Video } from '../../models/video';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'page-views',
  templateUrl: 'views.html'
})
export class ViewsPage {

  private song: MediaObject;
  private isSongPaused = false;
  videos = YOUTUBE_VIDEOS;

  constructor(public media: Media, public navCtrl: NavController, public videoPlayer: YoutubeVideoPlayer) { }

  public playMusic() {
    //console.log( 'playMusic called' );
    //console.log( 'path: ' + this.file.dataDirectory );
    // if song MediaObject doesn't already exist, create a new one
    try {
      if ( !this.song ) {
        //console.log('path: ' + this.file.applicationDirectory);
        //let path = (this.file.applicationDirectory + '../../assets/media/wii.mp3' ).replace(/^file:\/\//, '');
        this.song = this.media.create( "../../assets/media/WiiMusic.mp3" );
        this.song.play();
      }
        // if song is paused, don't recreate it; just play it
      else if ( this.isSongPaused ) {
        this.song.play();
        this.isSongPaused = false;
      }
    }
    catch ( e ) {
      console.log( 'error playing song\n' + e );
    }
  }
  
  public pauseMusic() {
    // only try to pause if the song exists
    if ( this.song ) {
      this.song.pause();
      this.isSongPaused = true;
    }
  }
  
  public stopMusic() {
    // stop the song, only if it exists
    if ( this.song ) {
      this.song.stop();
      this.song.release(); // frees up the memory
      this.song = null;
      this.isSongPaused = false;
    }
  }

  playVideo(video: Video){
    this.videoPlayer.openVideo(video.videoId);
  }



}
