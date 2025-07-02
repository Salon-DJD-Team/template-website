import { Component } from '@angular/core';
import { BannerV1Component } from '../../layouts/banner-v1/banner-v1.component';
import { NewsletterV2Component } from '../../components/newsletter-v2/newsletter-v2.component';

@Component({
  selector: 'app-terms-and-conditions',
  imports: [
    BannerV1Component,
    NewsletterV2Component
  ],
  templateUrl: './terms-and-conditions.component.html',
})
export class TermsAndConditionsComponent {

}
