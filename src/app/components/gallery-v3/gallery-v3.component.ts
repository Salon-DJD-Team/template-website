import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';

declare var jQuery: any;
declare var magnific_image: any;

@Component({
  selector: 'app-gallery-v3',
  imports: [CommonModule],
  templateUrl: './gallery-v3.component.html',
})
export class GalleryV3Component implements AfterViewInit {

  ngAfterViewInit(): void {
  (function ($) {
    setTimeout(function(){
      magnific_image();
      }, 100);
    })(jQuery);
  }

  galleries = [
    { image: "assets/images/gallery/1.jpg" },
    { image: "assets/images/gallery/2.jpg" },
    { image: "assets/images/gallery/3.jpg" },
    { image: "assets/images/gallery/4.jpg" },
    { image: "assets/images/gallery/5.jpg" },
    { image: "assets/images/gallery/6.jpg" },
    { image: "assets/images/gallery/7.jpg" },
    { image: "assets/images/gallery/8.jpg" },
    { image: "assets/images/gallery/9.jpg" },
  ];

}
