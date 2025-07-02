import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var jQuery: any;
declare var main_slider: any;
declare var time_countdown: any;

@Component({
  selector: 'app-slider-v2',
  imports: [
    CommonModule
  ],
  templateUrl: './slider-v2.component.html',
})
export class SliderV2Component implements AfterViewInit {

  ngAfterViewInit(): void {
	(function ($) {
		setTimeout(function(){
			main_slider();
			time_countdown();
		  }, 100);
	  })(jQuery);
  }

  slides = [
    {
      date: 'January 25, 2025',
      title: 'World Digital Conference 2025',
      location: 'Pearl Hotel, New York, USA',
      image: 'assets/images/main-slider/image-2.jpg',
      contentImage: 'assets/images/main-slider/content-image.png',
      button_name: 'Book Ticket',
      button_link: 'contact-us-01',
    },
    {
      date: 'January 25, 2025',
      title: 'World Digital Conference 2025',
      location: 'Pearl Hotel, New York, USA',
      image: 'assets/images/main-slider/image-2.jpg',
      contentImage: 'assets/images/main-slider/content-image.png',
      button_name: 'Book Ticket',
      button_link: 'contact-us-01',
    },
    {
      date: 'January 25, 2025',
      title: 'World Digital Conference 2025',
      location: 'Pearl Hotel, New York, USA',
      image: 'assets/images/main-slider/image-2.jpg',
      contentImage: 'assets/images/main-slider/content-image.png',
      button_name: 'Book Ticket',
      button_link: 'contact-us-01',
    },
  ];

}
