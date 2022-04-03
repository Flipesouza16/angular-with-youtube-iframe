import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  player: any;

  ngOnInit(): void {
    this.loadIframeApi();
  }

  loadIframeApi() {
    const tag = document.createElement('script');
    tag.src = "http://www.youtube.com/player_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    window['onYouTubeIframeAPIReady'] = () => this.startVideo();
  }

  startVideo() {
    this.player = new window['YT'].Player('player', {
      videoId: 'xdV_bzJgRxE',
      events: {
        'onReady': this.onPlayerReady.bind(this),
        'onStateChange': this.onPlayerStateChange.bind(this)
      }
    });
  }

  onPlayerReady(event) {
    console.log('onPlayerReady: ',event);
  }

  onPlayerStateChange(event) {
    console.log('onPlayerStateChange: ',event);
  }
}
