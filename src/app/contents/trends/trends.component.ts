import { Component, OnInit } from '@angular/core';
import {PopularTrendsService} from '../../services/popular-trends.service';
import {Trends} from '../../models/Trends';
import {SearchService} from '../../services/search.service';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {

  trends: Trends[];
  constructor(private popularTrendsService: PopularTrendsService, private searchService: SearchService) { }

  ngOnInit(): void {
    this.popularTrendsService.fetchPopularTrends().then(result => {
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
    this.searchService.makeRequest(trend);
  }
}
