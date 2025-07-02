import { Component } from '@angular/core';
import { BannerV1Component } from '../../layouts/banner-v1/banner-v1.component';
import { TeamsV1Component } from '../../components/teams-v1/teams-v1.component';
import { ContactInfoV1Component } from '../../components/contact-info-v1/contact-info-v1.component';
import { PartnersV2Component } from '../../components/partners-v2/partners-v2.component';
import { NewsletterV2Component } from '../../components/newsletter-v2/newsletter-v2.component';

@Component({
  selector: 'app-speakers',
  imports: [
    BannerV1Component,
    TeamsV1Component,
    ContactInfoV1Component,
    PartnersV2Component,
    NewsletterV2Component
  ],
  templateUrl: './speakers.component.html',
})
export class SpeakersComponent {

}
