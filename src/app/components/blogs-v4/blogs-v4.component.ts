import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blogs-v4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blogs-v4.component.html',
})
export class BlogsV4Component {
  articles = [
    {
      id: 1,
      title: "International Conference on Art Business",
      date: "2024-05-02",
      author: "Christine",
      comments: 3,
      image: "assets/images/resource/news-1.jpg",
      category: "Event",
      slug: "international-conference-on-art-business"
    },
    {
      id: 2,
      title: "Unique Digital Ideas to Learn Business",
      date: "2024-05-02",
      author: "Christine",
      comments: 3,
      image: "assets/images/resource/news-7.jpg",
      category: "Event",
      slug: "unique-digital-ideas-to-learn-business"
    },
    {
      id: 3,
      title: "Houston Event Planning Management",
      date: "2024-05-02",
      author: "Christine",
      comments: 3,
      image: "assets/images/resource/news-8.jpg",
      category: "Event",
      slug: "houston-event-planning-management"
    },
    {
      id: 4,
      title: "International Conference on Art Business",
      date: "2024-05-02",
      author: "Christine",
      comments: 3,
      image: "assets/images/resource/news-9.jpg",
      category: "Event",
      slug: "international-conference-on-art-business-2"
    },
    {
      id: 5,
      title: "Unique Digital Ideas to Learn Business",
      date: "2024-05-02",
      author: "Christine",
      comments: 3,
      image: "assets/images/resource/news-3.jpg",
      category: "Event",
      slug: "unique-digital-ideas-to-learn-business-2"
    },
    {
      id: 6,
      title: "International Conference on Art Business",
      date: "2024-05-02",
      author: "Christine",
      comments: 3,
      image: "assets/images/resource/news-10.jpg",
      category: "Event",
      slug: "international-conference-on-art-business-3"
    },
    {
      id: 7,
      title: "Unique Digital Ideas to Learn Business",
      date: "2024-05-02",
      author: "Christine",
      comments: 3,
      image: "assets/images/resource/news-11.jpg",
      category: "Event",
      slug: "unique-digital-ideas-to-learn-business-3"
    },
    {
      id: 8,
      title: "Houston Event Planning Management",
      date: "2024-05-02",
      author: "Christine",
      comments: 3,
      image: "assets/images/resource/news-12.jpg",
      category: "Event",
      slug: "houston-event-planning-management-2"
    },
    {
      id: 9,
      title: "Houston Event Planning Management",
      date: "2024-05-02",
      author: "Christine",
      comments: 3,
      image: "assets/images/resource/news-8.jpg",
      category: "Event",
      slug: "houston-event-planning-management-3"
    },
    {
      id: 10,
      title: "International Conference on Art Business",
      date: "2024-05-02",
      author: "Christine",
      comments: 3,
      image: "assets/images/resource/news-9.jpg",
      category: "Event",
      slug: "international-conference-on-art-business-4"
    }
  ];

  currentPage = 1;
  itemsPerPage = 8;

  get paginatedArticles() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.articles.slice(start, start + this.itemsPerPage);
  }

  get totalPages(): number[] {
    return Array(Math.ceil(this.articles.length / this.itemsPerPage))
      .fill(0)
      .map((_, i) => i + 1);
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  nextPage() {
    if (this.currentPage < this.totalPages.length) this.currentPage++;
  }

}