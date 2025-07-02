import { Component, AfterViewInit } from '@angular/core';

declare var jQuery: any;
declare var magnific_video: any;

@Component({
  selector: 'app-video-v1',
  imports: [],
  templateUrl: './video-v1.component.html',
})
export class VideoV1Component implements AfterViewInit {

  ngAfterViewInit(): void {
  (function ($) {
    setTimeout(function(){
      magnific_video();
      }, 100);
    })(jQuery);
  }

}
