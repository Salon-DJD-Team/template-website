import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events-v6',
  imports: [
    CommonModule
  ],
  templateUrl: './events-v6.component.html',
})
export class EventsV6Component {
  eventsPerPage = 6;
  currentPage = 1;

  events = [
    {
      image: 'assets/images/resource/leadership-1.jpg',
      name: 'Paul Wilson',
      title: 'Registration For Opening Workshop',
      time: '9:00 am -- 11:00 am',
      text: 'We’re inviting the top creatives in the tech industry...',
      style: '',
      slug: 'registration-for-opening-workshop'
    },
    {
      image: 'assets/images/resource/leadership-2.jpg',
      name: 'Ashli Scroggy',
      title: 'Modern Marketing Summit Sydney 2024',
      time: '9:00 am -- 11:00 am',
      text: 'We’re inviting the top creatives in the tech industry...',
      style: 'style-two',
      slug: 'modern-marketing-summit-sydney-2024'
    },
    {
      image: 'assets/images/resource/leadership-3.jpg',
      name: 'Robert Gates',
      title: 'Introduction About Speakers',
      time: '9:00 am -- 11:00 am',
      text: 'We’re inviting the top creatives in the tech industry...',
      style: '',
      slug: 'introduction-about-speakers'
    },
    {
      image: 'assets/images/resource/leadership-1.jpg',
      name: 'Paul Wilson',
      title: 'Registration For Opening Workshop',
      time: '9:00 am -- 11:00 am',
      text: 'We’re inviting the top creatives in the tech industry...',
      style: 'style-two',
      slug: 'registration-for-opening-workshop-2'
    },
    {
      image: 'assets/images/resource/leadership-2.jpg',
      name: 'Ashli Scroggy',
      title: 'Modern Marketing Summit Sydney 2024',
      time: '9:00 am -- 11:00 am',
      text: 'We’re inviting the top creatives in the tech industry...',
      style: '',
      slug: 'modern-marketing-summit-sydney-2024-2'
    },
    {
      image: 'assets/images/resource/leadership-3.jpg',
      name: 'Robert Gates',
      title: 'Introduction About Speakers',
      time: '9:00 am -- 11:00 am',
      text: 'We’re inviting the top creatives in the tech industry...',
      style: 'style-two',
      slug: 'introduction-about-speakers-2'
    },
    {
      image: 'assets/images/resource/leadership-1.jpg',
      name: 'Paul Wilson',
      title: 'Registration For Opening Workshop',
      time: '9:00 am -- 11:00 am',
      text: 'We’re inviting the top creatives in the tech industry...',
      style: '',
      slug: 'registration-for-opening-workshop-3'
    },
    {
      image: 'assets/images/resource/leadership-2.jpg',
      name: 'Ashli Scroggy',
      title: 'Modern Marketing Summit Sydney 2024',
      time: '9:00 am -- 11:00 am',
      text: 'We’re inviting the top creatives in the tech industry...',
      style: 'style-two',
      slug: 'modern-marketing-summit-sydney-2024-3'
    },
    {
      image: 'assets/images/resource/leadership-3.jpg',
      name: 'Robert Gates',
      title: 'Introduction About Speakers',
      time: '9:00 am -- 11:00 am',
      text: 'We’re inviting the top creatives in the tech industry...',
      style: '',
      slug: 'introduction-about-speakers-3'
    }
  ];  

  get paginatedEvents() {
    const start = (this.currentPage - 1) * this.eventsPerPage;
    return this.events.slice(start, start + this.eventsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.events.length / this.eventsPerPage);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}
