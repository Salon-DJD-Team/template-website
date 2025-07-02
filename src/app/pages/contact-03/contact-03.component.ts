import { Component } from '@angular/core';
import { BannerV1Component } from '../../layouts/banner-v1/banner-v1.component';
import { ContactFormV3Component } from '../../components/contact-form-v3/contact-form-v3.component';
import { GoogleMapV1Component } from '../../components/google-map-v1/google-map-v1.component';
import { NewsletterV2Component } from '../../components/newsletter-v2/newsletter-v2.component';

@Component({
  selector: 'app-contact-03',
  imports: [
    BannerV1Component,
    ContactFormV3Component,
    GoogleMapV1Component,
    NewsletterV2Component
  ],
  templateUrl: './contact-03.component.html',
})
export class Contact03Component {

}
