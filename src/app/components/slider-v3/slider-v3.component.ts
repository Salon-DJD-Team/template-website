import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var jQuery: any;
declare var main_slider: any;
declare var time_countdown: any;

@Component({
  selector: 'app-slider-v3',
  imports: [CommonModule],
  templateUrl: './slider-v3.component.html',
})
export class SliderV3Component implements AfterViewInit {

  ngAfterViewInit(): void {
	(function ($) {
		setTimeout(function(){
			main_slider();
			time_countdown();
		  }, 100);
	  })(jQuery);
  }

  // Slide data
  slides = [
    {
      title: 'Worldwide conference on',
      heading: 'Late Crazes in <br> Teaching Learning',
      location: 'Hilton Nashville Airport Hotel, Nashville, TN',
      pattern: 'assets/images/main-slider/pattern-6.png',
      image: 'assets/images/main-slider/image-4.jpg',
      countdownDate: '2030/12/31',
      button_name: 'Registration now',
      button_link: 'contact-us-01',
    },
    {
      title: 'Worldwide conference on',
      heading: 'Late Crazes in <br> Teaching Learning',
      location: 'Hilton Nashville Airport Hotel, Nashville, TN',
      pattern: 'assets/images/main-slider/pattern-6.png',
      image: 'assets/images/main-slider/image-4.jpg',
      countdownDate: '2030/12/31',
      button_name: 'Registration now',
      button_link: 'contact-us-01',
    },
    {
      title: 'Worldwide conference on',
      heading: 'Late Crazes in <br> Teaching Learning',
      location: 'Hilton Nashville Airport Hotel, Nashville, TN',
      pattern: 'assets/images/main-slider/pattern-6.png',
      image: 'assets/images/main-slider/image-4.jpg',
      countdownDate: '2030/12/31',
      button_name: 'Registration now',
      button_link: 'contact-us-01',
    },
  ];
  
}
