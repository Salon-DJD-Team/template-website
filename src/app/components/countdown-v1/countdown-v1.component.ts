import { Component, AfterViewInit } from '@angular/core';

declare var jQuery: any;
declare var time_countdown: any;

@Component({
  selector: 'app-countdown-v1',
  imports: [],
  templateUrl: './countdown-v1.component.html',
})
export class CountdownV1Component implements AfterViewInit  {
  
  ngAfterViewInit(): void {
	(function ($) {
		setTimeout(function(){
			time_countdown();
		  }, 100);
	  })(jQuery);
  }

}
