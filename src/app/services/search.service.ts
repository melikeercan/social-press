import {Injectable, OnInit} from '@angular/core';
import {Sources} from '../models/sources';
import {Content} from '../models/content.model';
import {HttpClient} from '@angular/common/http';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  data = new Subject<object>();
  loading: boolean;

  constructor(private http: HttpClient) { }

  makeRequest = (searchText: string, sources: Sources) => {
    console.log(searchText);
    console.log(sources);
    this.loading = true;
    this.http
        .get('https://jsonplaceholder.typicode.com/posts/1')
        .subscribe(data => {
          this.data.next(data);
          this.loading = false;
        });
  }

}
