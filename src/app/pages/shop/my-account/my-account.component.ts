import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerV1Component } from '../../../layouts/banner-v1/banner-v1.component';
import { NewsletterV2Component } from '../../../components/newsletter-v2/newsletter-v2.component';

declare var jQuery: any;
declare var tab_box: any;

@Component({
  selector: 'app-my-account',
  standalone: true,
  imports: [
    CommonModule,
    BannerV1Component,
    NewsletterV2Component
  ],
  templateUrl: './my-account.component.html',
})
export class MyAccountComponent implements AfterViewInit {
  ngAfterViewInit(): void {
	(function ($) {
		setTimeout(function(){
			tab_box();
		  }, 100);
	  })(jQuery);
  }
}