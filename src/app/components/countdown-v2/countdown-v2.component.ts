import { Component, AfterViewInit } from '@angular/core';

declare var jQuery: any;
declare var time_countdown: any;

@Component({
  selector: 'app-countdown-v2',
  templateUrl: './countdown-v2.component.html',
})
export class CountdownV2Component implements AfterViewInit {
  
  ngAfterViewInit(): void {
	(function ($) {
		setTimeout(function(){
			time_countdown();
		  }, 100);
	  })(jQuery);
  }

}
