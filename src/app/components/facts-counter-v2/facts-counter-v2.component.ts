import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var jQuery: any;
declare var facts_counter: any;

@Component({
  selector: 'app-facts-counter-v2',
  imports: [CommonModule],
  templateUrl: './facts-counter-v2.component.html',
})
export class FactsCounterV2Component implements AfterViewInit {
  
  ngAfterViewInit(): void {
	(function ($) {
		setTimeout(function(){
			facts_counter();
		  }, 100);
	  })(jQuery);
  }

  facts = [
    {
      title: "Workshops",
      icon: 'flaticon-training',
      counter: "8",
      suffix: 'hr',
    },
    {
      title: "Speakers",
      icon: 'flaticon-mic',
      counter: "124",
      suffix: '',
    },
    {
      title: "Sponsors",
      icon: 'flaticon-handshake',
      counter: "70",
      suffix: '+',
    },
    {
      title: "Countries",
      icon: 'flaticon-countries',
      counter: "100",
      suffix: '+',
    },
  ];

}
