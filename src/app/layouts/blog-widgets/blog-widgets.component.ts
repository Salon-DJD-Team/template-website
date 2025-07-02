import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-widgets',
  imports: [CommonModule],
  templateUrl: './blog-widgets.component.html',
})
export class BlogWidgetsComponent {

  posts = [
    {
      title: 'Take Your Life Into Your Own Hands',
      slug: 'take-your-life-into-your-own-hands',
      date: '2022-07-18',
      image: 'assets/images/resource/post-thumb-4.jpg',
    },
    {
      title: 'Arnold Sports Festival set for UK',
      slug: 'arnold-sports-festival-uk',
      date: '2022-07-18',
      image: 'assets/images/resource/post-thumb-5.jpg',
    },
    {
      title: 'What Do Live Music Fan Think About it',
      slug: 'live-music-fan-opinion',
      date: '2022-07-18',
      image: 'assets/images/resource/post-thumb-6.jpg',
    },
  ];

}
