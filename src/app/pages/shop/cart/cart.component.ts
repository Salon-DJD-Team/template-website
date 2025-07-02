import { AfterViewInit, Component } from '@angular/core';
import { BannerV1Component } from '../../../layouts/banner-v1/banner-v1.component';
import { NewsletterV2Component } from '../../../components/newsletter-v2/newsletter-v2.component';

declare var jQuery: any;
declare var custom_select_box: any;
declare var touch_spin: any;
declare var quantity_spinner: any;

@Component({
  selector: 'app-cart',
  imports: [
    BannerV1Component,
    NewsletterV2Component
  ],
  templateUrl: './cart.component.html',
})
export class CartComponent implements AfterViewInit {

  ngAfterViewInit(): void {
	(function ($) {
		setTimeout(function(){
      custom_select_box();
      touch_spin();
      quantity_spinner();
		  }, 100);
	  })(jQuery);
  }

}
