import { Component } from '@angular/core';
import { BannerV1Component } from '../../layouts/banner-v1/banner-v1.component';
import { AboutUsV1Component } from '../../components/about-us-v1/about-us-v1.component';
import { FactsCounterV1Component } from '../../components/facts-counter-v1/facts-counter-v1.component';
import { FeaturesV1Component } from '../../components/features-v1/features-v1.component';
import { ServicesV1Component } from '../../components/services-v1/services-v1.component';
import { AboutUsV3Component } from '../../components/about-us-v3/about-us-v3.component';
import { VideoV1Component } from '../../components/video-v1/video-v1.component';
import { PartnersV1Component } from '../../components/partners-v1/partners-v1.component';
import { ContactInfoV1Component } from '../../components/contact-info-v1/contact-info-v1.component';
import { NewsletterV2Component } from '../../components/newsletter-v2/newsletter-v2.component';

@Component({
  selector: 'app-about-us',
  imports: [
    BannerV1Component,
    AboutUsV1Component,
    FactsCounterV1Component,
    FeaturesV1Component,
    ServicesV1Component,
    AboutUsV3Component,
    VideoV1Component,
    PartnersV1Component,
    ContactInfoV1Component,
    NewsletterV2Component
  ],
  templateUrl: './about-us.component.html',
})
export class AboutUsComponent {

}
