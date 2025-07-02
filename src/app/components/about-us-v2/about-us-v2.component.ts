import { AfterViewInit, Component } from '@angular/core';

declare var jQuery: any;
declare var facts_counter: any;

@Component({
  selector: 'app-about-us-v2',
  imports: [],
  templateUrl: './about-us-v2.component.html',
})
export class AboutUsV2Component implements AfterViewInit {

  ngAfterViewInit(): void {
	(function ($) {
		setTimeout(function(){
			facts_counter();
		  }, 100);
	  })(jQuery);
  }

}
