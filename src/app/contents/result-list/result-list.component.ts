import {Component, OnInit} from '@angular/core';
import {SearchService} from '../../services/search.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {
  twitterPopularResults;
  youtubeRelatedResults;
  twitterSelected;
  youtubeSelected;
  instagramSelected;
  selectedId;
  isLoading = false;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.isLoading = false;
    this.searchService.selectedId.subscribe(value => {
      this.selectedId = value;
    });
    this.searchService.twitterData.subscribe(data => {
      this.twitterPopularResults = data ? data : [];
      this.youtubeRelatedResults = [];
      this.twitterSelected = true;
      this.youtubeSelected = false;
      this.instagramSelected = false;
      this.isLoading = false;
    });
    this.searchService.youtubeData.subscribe(data => {
      this.isLoading = false;
      this.youtubeRelatedResults = data ? data : [];
      this.twitterPopularResults = [];
      this.twitterSelected = false;
      this.youtubeSelected = true;
      this.instagramSelected = false;
      this.isLoading = false;
    });

  }
}
