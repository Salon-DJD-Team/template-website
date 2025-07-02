import { Component } from '@angular/core';
import { BannerV1Component } from '../../layouts/banner-v1/banner-v1.component';
import { NewsletterV2Component } from '../../components/newsletter-v2/newsletter-v2.component';

@Component({
  selector: 'app-privacy-policy',
  imports: [
    BannerV1Component,
    NewsletterV2Component
  ],
  templateUrl: './privacy-policy.component.html',
})
export class PrivacyPolicyComponent {

}
