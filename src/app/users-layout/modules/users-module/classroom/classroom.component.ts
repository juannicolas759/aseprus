import { Component } from '@angular/core';
declare var YT: any;
@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent {

  videoUrl = '';
  player: any;

  constructor() { }

  ngOnInit(): void {
    this.createPlayer();
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  createPlayer(): void {
    this.player = new YT.Player('player', {
      height: '360',
      width: '640',
      videoId: 'dQw4w9WgXcQ',
      playerVars: {
        autoplay: 1,
        controls: 1,
        showinfo: 0,
        rel: 0,
      },
      events: {
        'onReady': this.onPlayerReady.bind(this),
      },
    });
  }

  onPlayerReady(event: any): void {
    event.target.playVideo();
  }
}