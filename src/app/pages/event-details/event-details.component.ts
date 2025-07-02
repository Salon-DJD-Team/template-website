import { Component } from '@angular/core';
import { BannerV1Component } from '../../layouts/banner-v1/banner-v1.component';
import { NewsletterV2Component } from '../../components/newsletter-v2/newsletter-v2.component';

@Component({
  selector: 'app-event-details',
  imports: [
    BannerV1Component,
    NewsletterV2Component
  ],
  templateUrl: './event-details.component.html',
})
export class EventDetailsComponent {

}
