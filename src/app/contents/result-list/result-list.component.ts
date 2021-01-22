import {Component, OnInit} from '@angular/core';
import {SearchService} from '../../services/search.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {
  twitterPopularResults;
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
      this.isLoading = false;
    });

  }



}
