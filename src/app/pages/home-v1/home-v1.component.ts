import { Component } from '@angular/core';
import { SliderV1Component } from '../../components/slider-v1/slider-v1.component';
import { AboutUsV1Component } from '../../components/about-us-v1/about-us-v1.component';
import { FactsCounterV1Component } from '../../components/facts-counter-v1/facts-counter-v1.component';
import { TeamsV1Component } from '../../components/teams-v1/teams-v1.component';
import { FeaturesV1Component } from '../../components/features-v1/features-v1.component';
import { EventsV1Component } from '../../components/events-v1/events-v1.component';
import { GalleryV1Component } from '../../components/gallery-v1/gallery-v1.component';
import { PricePlanV1Component } from '../../components/price-plan-v1/price-plan-v1.component';
import { VideoV1Component } from '../../components/video-v1/video-v1.component';
import { PartnersV1Component } from '../../components/partners-v1/partners-v1.component';
import { BlogsV1Component } from '../../components/blogs-v1/blogs-v1.component';
import { NewsletterV1Component } from '../../components/newsletter-v1/newsletter-v1.component';

@Component({
  selector: 'app-home-v1',
  imports: [
    SliderV1Component,
    AboutUsV1Component,
    FactsCounterV1Component,
    TeamsV1Component,
    FeaturesV1Component,
    EventsV1Component,
    GalleryV1Component,
    PricePlanV1Component,
    VideoV1Component,
    PartnersV1Component,
    BlogsV1Component,
    NewsletterV1Component,
  ],
  templateUrl: './home-v1.component.html',
})
export class HomeV1Component {

}
