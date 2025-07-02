import { Component } from '@angular/core';
import { SliderV6Component } from '../../components/slider-v6/slider-v6.component';
import { CountdownV2Component } from '../../components/countdown-v2/countdown-v2.component';
import { ServicesV1Component } from '../../components/services-v1/services-v1.component';
import { AboutUsV3Component } from '../../components/about-us-v3/about-us-v3.component';
import { FactsCounterV3Component } from '../../components/facts-counter-v3/facts-counter-v3.component';
import { TeamsV3Component } from '../../components/teams-v3/teams-v3.component';
import { EventsV4Component } from '../../components/events-v4/events-v4.component';
import { TestimonialsV1Component } from '../../components/testimonials-v1/testimonials-v1.component';
import { PricePlanV3Component } from '../../components/price-plan-v3/price-plan-v3.component';
import { PartnersV2Component } from '../../components/partners-v2/partners-v2.component';
import { BlogsV3Component } from '../../components/blogs-v3/blogs-v3.component';
import { GalleryV2Component } from '../../components/gallery-v2/gallery-v2.component';

@Component({
  selector: 'app-home-v6',
  imports: [
    SliderV6Component,
    CountdownV2Component,
    ServicesV1Component,
    AboutUsV3Component,
    FactsCounterV3Component,
    TeamsV3Component,
    EventsV4Component,
    TestimonialsV1Component,
    PricePlanV3Component,
    PartnersV2Component,
    BlogsV3Component,
    GalleryV2Component
  ],
  templateUrl: './home-v6.component.html',
})
export class HomeV6Component {

}
