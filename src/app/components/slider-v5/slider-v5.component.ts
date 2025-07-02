import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';

declare var jQuery: any;
declare var main_slider: any;

@Component({
  selector: 'app-slider-v5',
  imports: [CommonModule],
  templateUrl: './slider-v5.component.html',
})
export class SliderV5Component implements AfterViewInit {
  ngAfterViewInit(): void {
	(function ($) {
		setTimeout(function(){
			main_slider();
		  }, 100);
	  })(jQuery);
  }

  slides = [
    {
      image: 'assets/images/main-slider/image-1.jpg',
      title: "Hurryup! Don't Waste Time",
      heading: 'Creative business agency Conference 2024',
      date: 'January 24, 2024',
      location: 'New York, USA',
      button: 'Register Now',
      link: 'contact-us-01',
    },
    {
      image: 'assets/images/main-slider/image-2.jpg',
      title: "Hurryup! Don't Waste Time",
      heading: 'Creative business agency Conference 2024',
      date: 'January 24, 2024',
      location: 'New York, USA',
      button: 'Register Now',
      link: 'contact-us-01',
    },
    {
      image: 'assets/images/main-slider/image-4.jpg',
      title: "Hurryup! Don't Waste Time",
      heading: 'Creative business agency Conference 2024',
      date: 'January 24, 2024',
      location: 'New York, USA',
      button: 'Register Now',
      link: 'contact-us-01',
    },
  ];
}
