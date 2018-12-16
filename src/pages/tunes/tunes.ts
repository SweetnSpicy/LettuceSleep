import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'page-tunes',
  templateUrl: 'tunes.html'
})
export class TunesPage {

  //constructor( private file: File, private media: Media) { }
  constructor(public media: Media, public navCtrl: NavController) { }
  
  private song: MediaObject;
  private isSongPaused = false;

  public playMusic() {
    //console.log( 'playMusic called' );
    //console.log( 'path: ' + this.file.dataDirectory );
    // if song MediaObject doesn't already exist, create a new one
    try {
      if ( !this.song ) {
        //console.log('path: ' + this.file.applicationDirectory);
        //let path = (this.file.applicationDirectory + '../../assets/media/wii.mp3' ).replace(/^file:\/\//, '');
        this.song = this.media.create( "../../assets/media/wii.mp3" );
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

}
