import { Component } from '@angular/core';
import { BannerV1Component } from '../../layouts/banner-v1/banner-v1.component';
import { BlogWidgetsComponent } from '../../layouts/blog-widgets/blog-widgets.component';
import { NewsletterV2Component } from '../../components/newsletter-v2/newsletter-v2.component';

@Component({
  selector: 'app-blog-details',
  imports: [
    BannerV1Component,
    BlogWidgetsComponent,
    NewsletterV2Component
  ],
  templateUrl: './blog-details.component.html',
})
export class BlogDetailsComponent {

}
