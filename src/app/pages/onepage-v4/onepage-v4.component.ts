import { Component } from '@angular/core';
import { SliderV4Component } from '../../components/slider-v4/slider-v4.component';
import { AboutUsV4Component } from '../../components/about-us-v4/about-us-v4.component';
import { FactsCounterV1Component } from '../../components/facts-counter-v1/facts-counter-v1.component';
import { FeaturesV2Component } from '../../components/features-v2/features-v2.component';
import { EventsV5Component } from '../../components/events-v5/events-v5.component';
import { RegisterNowV1Component } from '../../components/register-now-v1/register-now-v1.component';
import { PricePlanV4Component } from '../../components/price-plan-v4/price-plan-v4.component';
import { TeamsV4Component } from '../../components/teams-v4/teams-v4.component';
import { CtaV1Component } from '../../components/cta-v1/cta-v1.component';
import { BlogsV1Component } from '../../components/blogs-v1/blogs-v1.component';

@Component({
  selector: 'app-onepage-v4',
  imports: [
    SliderV4Component,
    AboutUsV4Component,
    FactsCounterV1Component,
    FeaturesV2Component,
    EventsV5Component,
    RegisterNowV1Component,
    PricePlanV4Component,
    TeamsV4Component,
    CtaV1Component,
    BlogsV1Component
  ],
  templateUrl: './onepage-v4.component.html',
})
export class OnepageV4Component {

}
