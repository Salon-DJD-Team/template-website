import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerV1Component } from '../../../layouts/banner-v1/banner-v1.component';
import { NewsletterV2Component } from '../../../components/newsletter-v2/newsletter-v2.component';

declare var jQuery: any;
declare var tab_box: any;
declare var magnific_image: any;
declare var custom_select_box: any;
declare var touch_spin: any;
declare var quantity_spinner: any;

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    CommonModule,
    BannerV1Component,
    NewsletterV2Component
  ],
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent implements AfterViewInit {

  ngAfterViewInit(): void {
	(function ($) {
		setTimeout(function(){
			tab_box();
      magnific_image();
      custom_select_box();
      touch_spin();
      quantity_spinner();
		  }, 100);
	  })(jQuery);
  }

  products = [
    {
      name: 'BCI Boot Sensor',
      image: 'assets/images/resource/products/4.jpg',
      price: '$25.00',
      discount: '$20.00',
      rating: 5,
      slug: 'bci-boot-sensor'
    },
    {
      name: 'Safety Masks',
      image: 'assets/images/resource/products/5.jpg',
      price: '$15.00',
      rating: 4,
      slug: 'safety-masks'
    },
    {
      name: 'Digital Weight',
      image: 'assets/images/resource/products/6.jpg',
      price: '$18.00',
      rating: 4,
      slug: 'digital-weight'
    },
    {
      name: 'Hand Sanitizer',
      image: 'assets/images/resource/products/7.jpg',
      price: '$10.00',
      rating: 5,
      slug: 'hand-sanitizer'
    },
  ];
  
}
