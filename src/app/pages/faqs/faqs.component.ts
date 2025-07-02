import { Component } from '@angular/core';
import { BannerV1Component } from '../../layouts/banner-v1/banner-v1.component';
import { FaqsV2Component } from '../../components/faqs-v2/faqs-v2.component';
import { ContactFormV1Component } from '../../components/contact-form-v1/contact-form-v1.component';
import { NewsletterV2Component } from '../../components/newsletter-v2/newsletter-v2.component';

@Component({
  selector: 'app-faqs',
  imports: [
    BannerV1Component,
    FaqsV2Component,
    ContactFormV1Component,
    NewsletterV2Component
  ],
  templateUrl: './faqs.component.html',
})
export class FaqsComponent {

}
