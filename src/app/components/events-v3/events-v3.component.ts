import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var jQuery: any;
declare var tab_box: any;

@Component({
  selector: 'app-events-v3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events-v3.component.html',
})
export class EventsV3Component implements AfterViewInit {
  ngAfterViewInit(): void {
	(function ($) {
		setTimeout(function(){
			tab_box();
		  }, 100);
	  })(jQuery);
  }
  
  tabs = [
    {
      id: 'speaker-one',
      date: 'Oct 05, 2022',
      day: 'First Day',
      speakers: [
        {
          image: 'assets/images/resource/leadership-1.jpg',
          icon: 'flaticon-voice',
          time: '08.00 am - 09.00 am',
          name: 'Paul Wilson',
          role: 'Art Critic',
          title: 'Registration For Opening Workshop',
          link: 'registration-for-opening-workshop',
          location: 'Hall 1, Building A , Golden Street , Southafrica'
        },
        {
          image: 'assets/images/resource/leadership-2.jpg',
          icon: 'flaticon-voice',
          time: '08.00 am - 09.00 am',
          name: 'Ashli Scroggy',
          role: 'Art Critic',
          title: 'Modern Marketing Summit Sydney',
          link: 'modern-marketing-summit-sydney',
          location: 'Hall 1, Building A , Golden Street , Southafrica',
          style: 'style-two'
        },
        {
          image: 'assets/images/resource/leadership-3.jpg',
          icon: 'flaticon-voice',
          time: '08.00 am - 09.00 am',
          name: 'Robert Gates',
          role: 'Art Critic',
          title: 'Introduction About Speakers',
          link: 'introduction-about-speakers',
          location: 'Hall 1, Building A , Golden Street , Southafrica'
        },
        {
          image: 'assets/images/resource/leadership-4.jpg',
          icon: 'flaticon-voice',
          time: '08.00 am - 09.00 am',
          name: 'GABRIELLE WINN',
          role: 'Insurance Consultant',
          title: 'Home Life Open Entryway Occasion',
          link: 'home-life-open-entryway-occasion',
          location: 'Hall 1, Building A , Golden Street , Southafrica',
          style: 'style-two'
        }
      ]
    },
    {
      id: 'speaker-two',
      date: 'Oct 06, 2022',
      day: 'Second Day',
      speakers: [
        {
          image: 'assets/images/resource/leadership-2.jpg',
          icon: 'flaticon-voice',
          time: '08.00 am - 09.00 am',
          name: 'Ashli Scroggy',
          role: 'Art Critic',
          title: 'Modern Marketing Summit Sydney',
          link: 'modern-marketing-summit-sydney',
          location: 'Hall 1, Building A , Golden Street , Southafrica',
          style: 'style-two'
        },
        {
          image: 'assets/images/resource/leadership-3.jpg',
          icon: 'flaticon-voice',
          time: '08.00 am - 09.00 am',
          name: 'Robert Gates',
          role: 'Art Critic',
          title: 'Introduction About Speakers',
          link: 'introduction-about-speakers',
          location: 'Hall 1, Building A , Golden Street , Southafrica'
        },
        {
          image: 'assets/images/resource/leadership-4.jpg',
          icon: 'flaticon-voice',
          time: '08.00 am - 09.00 am',
          name: 'GABRIELLE WINN',
          role: 'Insurance Consultant',
          title: 'Home Life Open Entryway Occasion',
          link: 'home-life-open-entryway-occasion',
          location: 'Hall 1, Building A , Golden Street , Southafrica',
          style: 'style-two'
        }
      ]
    },
    {
      id: 'speaker-three',
      date: 'Oct 07, 2022',
      day: 'Third Day',
      speakers: [
        {
          image: 'assets/images/resource/leadership-3.jpg',
          icon: 'flaticon-voice',
          time: '08.00 am - 09.00 am',
          name: 'Robert Gates',
          role: 'Art Critic',
          title: 'Introduction About Speakers',
          link: 'introduction-about-speakers',
          location: 'Hall 1, Building A , Golden Street , Southafrica'
        },
        {
          image: 'assets/images/resource/leadership-4.jpg',
          icon: 'flaticon-voice',
          time: '08.00 am - 09.00 am',
          name: 'GABRIELLE WINN',
          role: 'Insurance Consultant',
          title: 'Home Life Open Entryway Occasion',
          link: 'home-life-open-entryway-occasion',
          location: 'Hall 1, Building A , Golden Street , Southafrica',
          style: 'style-two'
        }
      ]
    }
  ];


  selectedTab = this.tabs[0].id;
  
}