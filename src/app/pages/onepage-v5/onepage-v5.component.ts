import { Component } from '@angular/core';
import { SliderV5Component } from '../../components/slider-v5/slider-v5.component';
import { CountdownV1Component } from '../../components/countdown-v1/countdown-v1.component';
import { FeaturesV3Component } from '../../components/features-v3/features-v3.component';
import { AboutUsV5Component } from '../../components/about-us-v5/about-us-v5.component';
import { TeamsV2Component } from '../../components/teams-v2/teams-v2.component';
import { EventsV3Component } from '../../components/events-v3/events-v3.component';
import { RegisterNowV1Component } from '../../components/register-now-v1/register-now-v1.component';
import { PricePlanV5Component } from '../../components/price-plan-v5/price-plan-v5.component';
import { PartnersV1Component } from '../../components/partners-v1/partners-v1.component';
import { BlogsV3Component } from '../../components/blogs-v3/blogs-v3.component';
import { GalleryV2Component } from '../../components/gallery-v2/gallery-v2.component';

@Component({
  selector: 'app-onepage-v5',
  imports: [
    SliderV5Component,
    CountdownV1Component,
    FeaturesV3Component,
    AboutUsV5Component,
    TeamsV2Component,
    EventsV3Component,
    RegisterNowV1Component,
    PricePlanV5Component,
    PartnersV1Component,
    BlogsV3Component,
    GalleryV2Component
  ],
  templateUrl: './onepage-v5.component.html',
})
export class OnepageV5Component {

}
