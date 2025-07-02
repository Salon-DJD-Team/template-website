import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';

declare var jQuery: any;
declare var magnific_image: any;

@Component({
  selector: 'app-footer-v2',
  imports: [CommonModule],
  templateUrl: './footer-v2.component.html',
})
export class FooterV2Component implements AfterViewInit {

  // Current Year
  currentYear: number = new Date().getFullYear();

  ngAfterViewInit(): void {
  (function ($) {
    setTimeout(function(){
      magnific_image();
      }, 100);
    })(jQuery);
  }

  galleries = [
    {
      thumbnail: 'assets/images/gallery/instagram-1.jpg',
      image: "assets/images/gallery/1.jpg"
    },
    {
      thumbnail: 'assets/images/gallery/instagram-2.jpg',
      image: "assets/images/gallery/2.jpg"
    },
    {
      thumbnail: 'assets/images/gallery/instagram-3.jpg',
      image: "assets/images/gallery/3.jpg"
    },
    {
      thumbnail: 'assets/images/gallery/instagram-4.jpg',
      image: "assets/images/gallery/4.jpg"
    },
    {
      thumbnail: 'assets/images/gallery/instagram-5.jpg',
      image: "assets/images/gallery/5.jpg"
    },
    {
      thumbnail: 'assets/images/gallery/instagram-6.jpg',
      image: "assets/images/gallery/6.jpg"
    },
  ];

}
