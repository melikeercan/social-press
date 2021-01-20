import { Component, OnInit } from '@angular/core';
import {PopularTrendsService} from '../../services/popular-trends.service';
import {Trends} from '../../models/Trends';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {

  trends: Trends[];
  constructor(private popularTrendsService: PopularTrendsService) { }

  ngOnInit(): void {
    this.popularTrendsService.fetchPopularTrends().then(result => {
      console.log(result);
      if (result) {
        this.trends = result;
      } else {
        this.trends = [];
      }
    });
  }

}
