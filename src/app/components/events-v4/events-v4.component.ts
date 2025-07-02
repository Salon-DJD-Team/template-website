import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var jQuery: any;
declare var tab_box: any;

@Component({
  selector: 'app-events-v4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events-v4.component.html',
})
export class EventsV4Component implements AfterViewInit {
  ngAfterViewInit(): void {
	(function ($) {
		setTimeout(function(){
			tab_box();
		  }, 100);
	  })(jQuery);
  }

  tabs = [
    {
      id: "speaker-one",
      dayLabel: "1st Day",
      month: "oct",
      date: "05",
      year: "2025",
      sessions: [
        {
          image: "assets/images/resource/leadership-1.jpg",
          name: "Paul Wilson",
          role: "Art Critic",
          title: "Registration For Opening Workshop",
          location: "Hall 1, Building A , Golden Street , Southafrica",
          timeStart: "08.00 am",
          timeEnd: "09.00 am",
          link: "registration-for-opening-workshop"
        },
        {
          image: "assets/images/resource/leadership-2.jpg",
          name: "Ashli Scroggy",
          role: "Art Critic",
          title: "Modern Marketing Summit Sydney 2025",
          location: "Hall 1, Building A , Golden Street , Southafrica",
          timeStart: "08.00 am",
          timeEnd: "09.00 am",
          link: "modern-marketing-summit-sydney-2025"
        },
        {
          image: "assets/images/resource/leadership-3.jpg",
          name: "Robert Gates",
          role: "Art Critic",
          title: "Introduction About Speakers",
          location: "Hall 1, Building A , Golden Street , Southafrica",
          timeStart: "08.00 am",
          timeEnd: "09.00 am",
          link: "introduction-about-speakers"
        },
        {
          image: "assets/images/resource/leadership-4.jpg",
          name: "GABRIELLE WINN",
          role: "Insurance Consultant",
          title: "Home Life Open Open Occasion of 21",
          location: "Hall 1, Building A , Golden Street , Southafrica",
          timeStart: "08.00 am",
          timeEnd: "09.00 am",
          link: "home-life-open-open-occasion-of-21"
        }
      ]
    },
    {
      id: "speaker-two",
      dayLabel: "2nd Day",
      month: "Nov",
      date: "06",
      year: "2025",
      sessions: [
        {
          image: "assets/images/resource/leadership-2.jpg",
          name: "Ashli Scroggy",
          role: "Art Critic",
          title: "Modern Marketing Summit Sydney 2025",
          location: "Hall 1, Building A , Golden Street , Southafrica",
          timeStart: "08.00 am",
          timeEnd: "09.00 am",
          link: "modern-marketing-summit-sydney-2025"
        },
        {
          image: "assets/images/resource/leadership-3.jpg",
          name: "Robert Gates",
          role: "Art Critic",
          title: "Introduction About Speakers",
          location: "Hall 1, Building A , Golden Street , Southafrica",
          timeStart: "08.00 am",
          timeEnd: "09.00 am",
          link: "introduction-about-speakers"
        },
        {
          image: "assets/images/resource/leadership-4.jpg",
          name: "GABRIELLE WINN",
          role: "Insurance Consultant",
          title: "Home Life Open Open Occasion of 21",
          location: "Hall 1, Building A , Golden Street , Southafrica",
          timeStart: "08.00 am",
          timeEnd: "09.00 am",
          link: "home-life-open-open-occasion-of-21"
        }
      ]
    },
    {
      id: "speaker-three",
      dayLabel: "3rd Day",
      month: "Dec",
      date: "07",
      year: "2025",
      sessions: [
        {
          image: "assets/images/resource/leadership-1.jpg",
          name: "Paul Wilson",
          role: "Art Critic",
          title: "Registration For Opening Workshop",
          location: "Hall 1, Building A , Golden Street , Southafrica",
          timeStart: "08.00 am",
          timeEnd: "09.00 am",
          link: "registration-for-opening-workshop"
        },
        {
          image: "assets/images/resource/leadership-2.jpg",
          name: "Ashli Scroggy",
          role: "Art Critic",
          title: "Modern Marketing Summit Sydney 2025",
          location: "Hall 1, Building A , Golden Street , Southafrica",
          timeStart: "08.00 am",
          timeEnd: "09.00 am",
          link: "modern-marketing-summit-sydney-2025"
        },
        {
          image: "assets/images/resource/leadership-3.jpg",
          name: "Robert Gates",
          role: "Art Critic",
          title: "Introduction About Speakers",
          location: "Hall 1, Building A , Golden Street , Southafrica",
          timeStart: "08.00 am",
          timeEnd: "09.00 am",
          link: "introduction-about-speakers"
        },
        {
          image: "assets/images/resource/leadership-4.jpg",
          name: "GABRIELLE WINN",
          role: "Insurance Consultant",
          title: "Home Life Open Open Occasion of 21",
          location: "Hall 1, Building A , Golden Street , Southafrica",
          timeStart: "08.00 am",
          timeEnd: "09.00 am",
          link: "home-life-open-open-occasion-of-21"
        }
      ]
    }
  ]

  activeTab = this.tabs[0].id;

}