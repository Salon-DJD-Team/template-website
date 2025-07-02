import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials-v2',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './testimonials-v2.component.html',
})
export class TestimonialsV2Component {
  testimonials = [
    {
      name: 'Monszil Baker',
      role: 'Development Expert',
      img: 'assets/images/resource/author-1.jpg',
      text: 'Petierunt uti sibi concilium totius Galliae in diem certam indicere. Dolor sit amet eiusmod consectetur elit sed tempor incd idunt labore et dolore magna aliqua.',
      rating: 5
    },
    {
      name: 'Micheal Wolk',
      role: 'Marketing Expert',
      img: 'assets/images/resource/author-2.jpg',
      text: 'Petierunt uti sibi concilium totius Galliae in diem certam indicere. Dolor sit amet eiusmod consectetur elit sed tempor incd idunt labore et dolore magna aliqua.',
      rating: 4
    },
    {
      name: 'Monszil Baker',
      role: 'Development Expert',
      img: 'assets/images/resource/author-1.jpg',
      text: 'Petierunt uti sibi concilium totius Galliae in diem certam indicere. Dolor sit amet eiusmod consectetur elit sed tempor incd idunt labore et dolore magna aliqua.',
      rating: 5
    },
    {
      name: 'Micheal Wolk',
      role: 'Marketing Expert',
      img: 'assets/images/resource/author-2.jpg',
      text: 'Petierunt uti sibi concilium totius Galliae in diem certam indicere. Dolor sit amet eiusmod consectetur elit sed tempor incd idunt labore et dolore magna aliqua.',
      rating: 4
    },
    {
      name: 'Monszil Baker',
      role: 'Development Expert',
      img: 'assets/images/resource/author-1.jpg',
      text: 'Petierunt uti sibi concilium totius Galliae in diem certam indicere. Dolor sit amet eiusmod consectetur elit sed tempor incd idunt labore et dolore magna aliqua.',
      rating: 5
    },
    {
      name: 'Micheal Wolk',
      role: 'Marketing Expert',
      img: 'assets/images/resource/author-2.jpg',
      text: 'Petierunt uti sibi concilium totius Galliae in diem certam indicere. Dolor sit amet eiusmod consectetur elit sed tempor incd idunt labore et dolore magna aliqua.',
      rating: 4
    },
    {
      name: 'Monszil Baker',
      role: 'Development Expert',
      img: 'assets/images/resource/author-1.jpg',
      text: 'Petierunt uti sibi concilium totius Galliae in diem certam indicere. Dolor sit amet eiusmod consectetur elit sed tempor incd idunt labore et dolore magna aliqua.',
      rating: 5
    },
    {
      name: 'Micheal Wolk',
      role: 'Marketing Expert',
      img: 'assets/images/resource/author-2.jpg',
      text: 'Petierunt uti sibi concilium totius Galliae in diem certam indicere. Dolor sit amet eiusmod consectetur elit sed tempor incd idunt labore et dolore magna aliqua.',
      rating: 4
    },
    {
      name: 'Monszil Baker',
      role: 'Development Expert',
      img: 'assets/images/resource/author-1.jpg',
      text: 'Petierunt uti sibi concilium totius Galliae in diem certam indicere. Dolor sit amet eiusmod consectetur elit sed tempor incd idunt labore et dolore magna aliqua.',
      rating: 5
    },
    {
      name: 'Micheal Wolk',
      role: 'Marketing Expert',
      img: 'assets/images/resource/author-2.jpg',
      text: 'Petierunt uti sibi concilium totius Galliae in diem certam indicere. Dolor sit amet eiusmod consectetur elit sed tempor incd idunt labore et dolore magna aliqua.',
      rating: 4
    },
  ];

  currentPage = 1;
  itemsPerPage = 6;

  get paginatedTestimonials() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.testimonials.slice(start, start + this.itemsPerPage);
  }

  get totalPages(): number[] {
    return Array(Math.ceil(this.testimonials.length / this.itemsPerPage))
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
