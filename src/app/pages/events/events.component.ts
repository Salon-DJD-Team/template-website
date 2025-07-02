import { Component } from '@angular/core';
import { BannerV1Component } from '../../layouts/banner-v1/banner-v1.component';
import { EventsV6Component } from '../../components/events-v6/events-v6.component';
import { NewsletterV2Component } from '../../components/newsletter-v2/newsletter-v2.component';

@Component({
  selector: 'app-events',
  imports: [
    BannerV1Component,
    EventsV6Component,
    NewsletterV2Component
  ],
  templateUrl: './events.component.html',
})
export class EventsComponent {

}
