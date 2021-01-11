import { Component, OnInit } from '@angular/core';

interface ContentProps {
  title: string;
  description: string;
  content: string;
  tags: string[];
  image?: string;
  youtubeVideoId?: string;
  instagramLink?: string;
}

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})

export class ContentListComponent implements OnInit {

  contentList: ContentProps[] = [
    {
      title: 'A post shared by DogsOf (@dogsofinstagram)', description: 'Description 1', content: 'Content 1',
      tags: ['Tag11', 'Tag21', 'Tag31'],
      image: 'https://imgur.com/gallery/vgW1p',
      // youtubeVideoId: 'sjoWzwimUWk',
      // instagramLink: 'http://www.instagram.com/reel/CJoe3OAAMU5/?utm_source=ig_embed&amp;utm_campaign=loading'
    },
    {
      title: 'A post shared by Cat Lovers Club (@catloversclub)', description: 'Description 2', content: 'Content 2',
      tags: ['Tag12', 'Tag22', 'Tag32', 'Tag42'],
      // image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      youtubeVideoId: 'KA-DryAZanM',
      // instagramLink: 'http://www.instagram.com/p/CIMW5hlj1md/?utm_source=ig_embed&amp;utm_campaign=loading'
    },
    {
      title: 'A post shared by Food Network (@foodnetwork)', description: 'Description 3', content: 'Content 3',
      tags: ['Tag13', 'Tag23', 'Tag33', 'Tag43', 'Tag53'],
      // image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      // youtubeVideoId: '8v2GYW6X7WY',
      instagramLink: 'https://www.instagram.com/tv/CJry9lrB1qT/?utm_source=ig_embed&amp;utm_campaign=loading'
    },
  ];

  constructor() { }

  ngOnInit(): void {
    let apiLoaded;
    if (!apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'http://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      apiLoaded = true;
    }
  }

}
