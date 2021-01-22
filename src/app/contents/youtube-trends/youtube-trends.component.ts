import { Component, OnInit } from '@angular/core';
import {YoutubeTrends} from "../../models/YoutubeTrends";
import {PopularTrendsService} from "../../services/popular-trends.service";
import {SearchService} from "../../services/search.service";

let apiLoaded = false;

@Component({
  selector: 'app-youtube-trends',
  templateUrl: './youtube-trends.component.html',
  styleUrls: ['./youtube-trends.component.css']
})
export class YoutubeTrendsComponent implements OnInit {
  trends: YoutubeTrends[];
  constructor(private popularTrendsService: PopularTrendsService, private searchService: SearchService) { }

  ngOnInit(): void {
    this.popularTrendsService.fetchYoutubeTrends().then(result => {
      console.log(result);
      if (result) {
        this.trends = result;
      } else {
        this.trends = [];
      }
    });

    if (!apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      apiLoaded = true;
    }
  }

  selectTrend(trend: string): void {
    if (trend.charAt(0) === '#') {
      trend = trend.substr(1);
    }
    this.searchService.makeRequest(trend);
  }

}
