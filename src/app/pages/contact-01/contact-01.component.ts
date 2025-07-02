import { Component } from '@angular/core';
import { BannerV1Component } from '../../layouts/banner-v1/banner-v1.component';
import { ContactFormV2Component } from '../../components/contact-form-v2/contact-form-v2.component';
import { GoogleMapV1Component } from '../../components/google-map-v1/google-map-v1.component';
import { NewsletterV2Component } from '../../components/newsletter-v2/newsletter-v2.component';

@Component({
  selector: 'app-contact-01',
  imports: [
    BannerV1Component,
    ContactFormV2Component,
    GoogleMapV1Component,
    NewsletterV2Component
  ],
  templateUrl: './contact-01.component.html',
})
export class Contact01Component {

}
