import { Component, OnInit } from '@angular/core';

let apiLoaded = false;

@Component({
  selector: 'app-youtube-trends',
  templateUrl: './youtube-trends.component.html',
  styleUrls: ['./youtube-trends.component.css']
})
export class YoutubeTrendsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    if (!apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      apiLoaded = true;
    }
  }

}
