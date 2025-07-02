import { Component } from '@angular/core';
import { BannerV1Component } from '../../layouts/banner-v1/banner-v1.component';
import { EventsV4Component } from '../../components/events-v4/events-v4.component';
import { TestimonialsV1Component } from '../../components/testimonials-v1/testimonials-v1.component';
import { PartnersV2Component } from '../../components/partners-v2/partners-v2.component';
import { NewsletterV2Component } from '../../components/newsletter-v2/newsletter-v2.component';

@Component({
  selector: 'app-schedule',
  imports: [
    BannerV1Component,
    EventsV4Component,
    TestimonialsV1Component,
    PartnersV2Component,
    NewsletterV2Component
  ],
  templateUrl: './schedule.component.html',
})
export class ScheduleComponent {

}
