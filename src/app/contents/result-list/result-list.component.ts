import {Component, OnInit} from '@angular/core';
import {SearchService} from '../../services/search.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {
  data;
  isLoading = false;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.isLoading = false;
    this.searchService.data.subscribe(data => {
      this.data = data ? data : [];
      this.isLoading = false;
    });
  }



}
