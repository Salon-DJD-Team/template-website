import { Component } from '@angular/core';
import { BannerV1Component } from '../../layouts/banner-v1/banner-v1.component';
import { BlogsV4Component } from '../../components/blogs-v4/blogs-v4.component';
import { BlogWidgetsComponent } from '../../layouts/blog-widgets/blog-widgets.component';

@Component({
  selector: 'app-blog-v1',
  imports: [
    BannerV1Component,
    BlogsV4Component,
    BlogWidgetsComponent
  ],
  templateUrl: './blog-v1.component.html',
})
export class BlogV1Component {

}
