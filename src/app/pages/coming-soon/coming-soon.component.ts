import { Component, AfterViewInit } from '@angular/core';

declare var jQuery: any;
declare var time_countdown: any;

@Component({
  selector: 'app-coming-soon',
  imports: [],
  templateUrl: './coming-soon.component.html',
})
export class ComingSoonComponent implements AfterViewInit {
  
  ngAfterViewInit(): void {
	(function ($) {
		setTimeout(function(){
			time_countdown();
		  }, 100);
	  })(jQuery);
  }

}
