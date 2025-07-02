import { Component } from '@angular/core';
import { SliderV2Component } from '../../components/slider-v2/slider-v2.component';
import { AboutUsV2Component } from '../../components/about-us-v2/about-us-v2.component';
import { EventsV2Component } from '../../components/events-v2/events-v2.component';
import { FactsCounterV2Component } from '../../components/facts-counter-v2/facts-counter-v2.component';
import { JoinEventsV1Component } from '../../components/join-events-v1/join-events-v1.component';
import { TeamsV2Component } from '../../components/teams-v2/teams-v2.component';
import { EventsV3Component } from '../../components/events-v3/events-v3.component';
import { FaqsV1Component } from '../../components/faqs-v1/faqs-v1.component';
import { PricePlanV2Component } from '../../components/price-plan-v2/price-plan-v2.component';
import { BlogsV2Component } from '../../components/blogs-v2/blogs-v2.component';
import { PartnersV1Component } from '../../components/partners-v1/partners-v1.component';
import { ContactInfoV1Component } from '../../components/contact-info-v1/contact-info-v1.component';
import { NewsletterV2Component } from '../../components/newsletter-v2/newsletter-v2.component';

@Component({
  selector: 'app-home-v2',
  imports: [
    SliderV2Component,
    AboutUsV2Component,
    EventsV2Component,
    FactsCounterV2Component,
    JoinEventsV1Component,
    TeamsV2Component,
    EventsV3Component,
    FaqsV1Component,
    PricePlanV2Component,
    BlogsV2Component,
    PartnersV1Component,
    ContactInfoV1Component,
    NewsletterV2Component
  ],
  templateUrl: './home-v2.component.html',
})
export class HomeV2Component {

}
