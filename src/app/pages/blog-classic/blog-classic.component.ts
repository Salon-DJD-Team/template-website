import { Component } from '@angular/core';
import { BannerV1Component } from '../../layouts/banner-v1/banner-v1.component';
import { BlogsV5Component } from '../../components/blogs-v5/blogs-v5.component';
import { BlogWidgetsComponent } from '../../layouts/blog-widgets/blog-widgets.component';
import { NewsletterV2Component } from '../../components/newsletter-v2/newsletter-v2.component';

@Component({
  selector: 'app-blog-classic',
  imports: [
    BannerV1Component,
    BlogsV5Component,
    BlogWidgetsComponent,
    NewsletterV2Component
  ],
  templateUrl: './blog-classic.component.html',
})
export class BlogClassicComponent {

}
