import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  contentList: {title: string, description: string, content: string, tags: string[], image: string }[] = [
    {
      title: 'Title 1', description: 'Description 1', content: 'Content 1',
      tags: ['Tag11','Tag21','Tag31'],
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
    },
    {
      title: 'Title 2', description: 'Description 2', content: 'Content 2',
      tags: ['Tag12','Tag22','Tag32','Tag42'],
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
    },
    {
      title: 'Title 3', description: 'Description 3', content: 'Content 3',
      tags: ['Tag13','Tag23','Tag33','Tag43','Tag53'],
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
    },
  ]

  constructor() { }

  ngOnInit(): void {
    let apiLoaded;
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
