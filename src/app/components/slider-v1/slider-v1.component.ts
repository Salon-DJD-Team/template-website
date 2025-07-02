import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var jQuery: any;
declare var main_slider: any;

@Component({
  selector: 'app-slider-v1',
  imports: [CommonModule],
  templateUrl: './slider-v1.component.html',
})
export class SliderV1Component implements AfterViewInit {

  ngAfterViewInit(): void {
	(function ($) {
		setTimeout(function(){
			main_slider();
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
      button_name: 'Registration now',
      button_link: 'about-us',
    },
    {
      date: 'January 25, 2025',
      title: 'World Digital Conference 2025',
      location: 'Pearl Hotel, New York, USA',
      image: 'assets/images/main-slider/image-2.jpg',
      contentImage: 'assets/images/main-slider/content-image.png',
      button_name: 'Registration now',
      button_link: 'about-us',
    },
    {
      date: 'January 25, 2025',
      title: 'World Digital Conference 2025',
      location: 'Pearl Hotel, New York, USA',
      image: 'assets/images/main-slider/image-2.jpg',
      contentImage: 'assets/images/main-slider/content-image.png',
      button_name: 'Registration now',
      button_link: 'about-us',
    },
  ];

}
