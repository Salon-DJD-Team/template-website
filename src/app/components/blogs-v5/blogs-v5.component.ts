import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blogs-v5',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blogs-v5.component.html',
})
export class BlogsV5Component {
  articles = [
    {
      id: 1,
      title: "International Conference on Art Business",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "2024-05-02",
      author: "Christine",
      comments: 3,
      image: "assets/images/resource/news-13.jpg",
      category: "Event",
      slug: "international-conference-on-art-business"
    },
    {
      id: 2,
      title: "Unique Digital Ideas to Learn Business",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "2024-05-02",
      author: "Christine",
      comments: 3,
      image: "assets/images/resource/news-14.jpg",
      category: "Event",
      slug: "unique-digital-ideas-to-learn-business"
    },
    {
      id: 3,
      title: "Houston Event Planning Management",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "2024-05-02",
      author: "Christine",
      comments: 3,
      image: "assets/images/resource/news-15.jpg",
      category: "Event",
      slug: "houston-event-planning-management"
    },
    {
      id: 4,
      title: "International Conference on Art Business",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "2024-05-02",
      author: "Christine",
      comments: 3,
      image: "assets/images/resource/news-16.jpg",
      category: "Event",
      slug: "international-conference-on-art-business-2"
    },
    {
      id: 5,
      title: "Unique Digital Ideas to Learn Business",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "2024-05-02",
      author: "Christine",
      comments: 3,
      image: "assets/images/resource/news-13.jpg",
      category: "Event",
      slug: "unique-digital-ideas-to-learn-business-2"
    }
  ];  

  currentPage = 1;
  itemsPerPage = 4;

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