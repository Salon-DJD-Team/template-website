import { Component } from '@angular/core';
import { BannerV1Component } from '../../layouts/banner-v1/banner-v1.component';
import { GalleryV3Component } from '../../components/gallery-v3/gallery-v3.component';
import { NewsletterV2Component } from '../../components/newsletter-v2/newsletter-v2.component';

@Component({
  selector: 'app-gallery',
  imports: [
    BannerV1Component,
    GalleryV3Component,
    NewsletterV2Component
  ],
  templateUrl: './gallery.component.html',
})
export class GalleryComponent {

}
