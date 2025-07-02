import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var jQuery: any;
declare var tab_box: any;

@Component({
  selector: 'app-events-v1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events-v1.component.html',
})
export class EventsV1Component implements AfterViewInit {
  ngAfterViewInit(): void {
	(function ($) {
		setTimeout(function(){
			tab_box();
		  }, 100);
	  })(jQuery);
  }

  selectedTab = 0;
  
  tabs = [
    {
      id: 'event-one',
      title: 'First Day',
      date: 'January 5, 2022',
      sessions: [
        {
          time: '9:00 am -- 11:00 am',
          speaker: 'Paul Wilson',
          title: 'Registration For Opening Workshop',
          link: 'registration-for-opening-workshop',
          description: 'We’re inviting the top creatives in the tech industry from all over the world…',
          image: 'assets/images/resource/leadership-1.jpg',
          icon: 'flaticon-voice',
          style: 'default'
        },
        {
          time: '9:00 am -- 11:00 am',
          speaker: 'Ashli Scroggy',
          title: 'Modern Marketing Summit Sydney 2025',
          link: 'modern-marketing-summit-sydney-2025',
          description: 'We’re inviting the top creatives in the tech industry from all over the world…',
          image: 'assets/images/resource/leadership-2.jpg',
          icon: 'flaticon-voice',
          style: 'style-two'
        },
        {
          time: '9:00 am -- 11:00 am',
          speaker: 'Robert Gates',
          title: 'Introduction About Speakers',
          link: 'introduction-about-speakers',
          description: 'We’re inviting the top creatives in the tech industry from all over the world…',
          image: 'assets/images/resource/leadership-3.jpg',
          icon: 'flaticon-voice',
          style: 'default'
        }
      ]
    },
    {
      id: 'event-two',
      title: 'Second Day',
      date: 'January 6, 2022',
      sessions: [
        {
          time: '9:00 am -- 11:00 am',
          speaker: 'Ashli Scroggy',
          title: 'Modern Marketing Summit Sydney 2025',
          link: 'modern-marketing-summit-sydney-2025',
          description: 'We’re inviting the top creatives in the tech industry from all over the world…',
          image: 'assets/images/resource/leadership-2.jpg',
          icon: 'flaticon-voice',
          style: 'style-two'
        },
        {
          time: '9:00 am -- 11:00 am',
          speaker: 'Robert Gates',
          title: 'Introduction About Speakers',
          link: 'introduction-about-speakers',
          description: 'We’re inviting the top creatives in the tech industry from all over the world…',
          image: 'assets/images/resource/leadership-3.jpg',
          icon: 'flaticon-voice',
          style: 'default'
        }
      ]
    },
    {
      id: 'event-three',
      title: 'Third Day',
      date: 'January 7, 2022',
      sessions: [
        {
          time: '9:00 am -- 11:00 am',
          speaker: 'Paul Wilson',
          title: 'Registration For Opening Workshop',
          link: 'registration-for-opening-workshop',
          description: 'We’re inviting the top creatives in the tech industry from all over the world…',
          image: 'assets/images/resource/leadership-1.jpg',
          icon: 'flaticon-voice',
          style: 'default'
        },
        {
          time: '9:00 am -- 11:00 am',
          speaker: 'Ashli Scroggy',
          title: 'Modern Marketing Summit Sydney 2025',
          link: 'modern-marketing-summit-sydney-2025',
          description: 'We’re inviting the top creatives in the tech industry from all over the world…',
          image: 'assets/images/resource/leadership-2.jpg',
          icon: 'flaticon-voice',
          style: 'style-two'
        },
        {
          time: '9:00 am -- 11:00 am',
          speaker: 'Robert Gates',
          title: 'Introduction About Speakers',
          link: 'introduction-about-speakers',
          description: 'We’re inviting the top creatives in the tech industry from all over the world…',
          image: 'assets/images/resource/leadership-3.jpg',
          icon: 'flaticon-voice',
          style: 'default'
        }
      ]
    },
    {
      id: 'event-four',
      title: 'Fourth Day',
      date: 'January 8, 2022',
      sessions: [
        {
          time: '9:00 am -- 11:00 am',
          speaker: 'Ashli Scroggy',
          title: 'Modern Marketing Summit Sydney 2025',
          link: 'modern-marketing-summit-sydney-2025',
          description: 'We’re inviting the top creatives in the tech industry from all over the world…',
          image: 'assets/images/resource/leadership-2.jpg',
          icon: 'flaticon-voice',
          style: 'style-two'
        },
        {
          time: '9:00 am -- 11:00 am',
          speaker: 'Robert Gates',
          title: 'Introduction About Speakers',
          link: 'introduction-about-speakers',
          description: 'We’re inviting the top creatives in the tech industry from all over the world…',
          image: 'assets/images/resource/leadership-3.jpg',
          icon: 'flaticon-voice',
          style: 'default'
        }
      ]
    }
  ];

}