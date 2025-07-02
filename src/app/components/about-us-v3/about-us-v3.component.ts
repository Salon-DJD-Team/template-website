import { AfterViewInit, Component } from '@angular/core';

declare var jQuery: any;
declare var facts_counter: any;

@Component({
  selector: 'app-about-us-v3',
  imports: [],
  templateUrl: './about-us-v3.component.html',
})
export class AboutUsV3Component implements AfterViewInit {
  
  ngAfterViewInit(): void {
	(function ($) {
		setTimeout(function(){
			facts_counter();
		  }, 100);
	  })(jQuery);
  }

}
