import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blogs-v3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blogs-v3.component.html',
})
export class BlogsV3Component {
  articles = [
    {
      id: 1,
      title: "International Conference on Art Business Specka",
      date: "2024-05-02",
      author: "Christine",
      comments: 3,
      image: "assets/images/resource/news-4.jpg",
      category: "Event",
      slug: "international-conference-on-art-business-specka"
    },
    {
      id: 2,
      title: "Unique Digital Ideas to Learn Business Growth",
      date: "2024-05-02",
      author: "Christine",
      comments: 3,
      image: "assets/images/resource/news-5.jpg",
      category: "Event",
      slug: "unique-digital-ideas-to-learn-business-growth"
    },
    {
      id: 3,
      title: "Houston Event Planning Management For Us",
      date: "2024-05-02",
      author: "Christine",
      comments: 3,
      image: "assets/images/resource/news-6.jpg",
      category: "Event",
      slug: "houston-event-planning-management-for-us"
    }
  ];
}