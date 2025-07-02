import { Component } from '@angular/core';
import { BannerV1Component } from '../../layouts/banner-v1/banner-v1.component';
import { PricePlanV2Component } from '../../components/price-plan-v2/price-plan-v2.component';
import { NewsletterV2Component } from '../../components/newsletter-v2/newsletter-v2.component';

@Component({
  selector: 'app-price',
  imports: [
    BannerV1Component,
    PricePlanV2Component,
    NewsletterV2Component
  ],
  templateUrl: './price.component.html',
})
export class PriceComponent {

}
