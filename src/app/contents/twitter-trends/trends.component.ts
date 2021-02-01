import { Component, OnInit } from '@angular/core';
import {PopularTrendsService} from '../../services/popular-trends.service';
import {TwitterTrends} from '../../models/TwitterTrends';
import {SearchService} from '../../services/search.service';

@Component({
  selector: 'app-trends',
  templateUrl: './twitter-trends.component.html',
  styleUrls: ['./twitter-trends.component.css']
})
export class TrendsComponent implements OnInit {

  trends: TwitterTrends[];
  constructor(private popularTrendsService: PopularTrendsService, private searchService: SearchService) { }

  ngOnInit(): void {
    this.popularTrendsService.fetchTwitterTrends().then(result => {
      if (result) {
        this.trends = result;
      } else {
        this.trends = [];
      }
    });
  }

  selectTrend(trend: string): void {
    if (trend.charAt(0) === '#') {
      trend = trend.substr(1);
    }
    this.searchService.searchTwitterHashtags(trend);
  }
}
