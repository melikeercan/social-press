import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  panelOpenState = false;

  contentList: {title: string, description: string, content: string, tags: string[]}[] = [
    { title: 'Title 1', description: 'Description 1', content: 'Content 1', tags: ['Tag11','Tag21','Tag31'] },
    { title: 'Title 2', description: 'Description 2', content: 'Content 2', tags: ['Tag12','Tag22','Tag32','Tag42'] },
    { title: 'Title 3', description: 'Description 3', content: 'Content 3', tags: ['Tag13','Tag23','Tag33','Tag43','Tag53'] },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
