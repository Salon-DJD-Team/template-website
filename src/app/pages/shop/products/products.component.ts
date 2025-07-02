import { Component } from '@angular/core';
import { BannerV1Component } from '../../../layouts/banner-v1/banner-v1.component';
import { ProductsV1Component } from '../../../components/products-v1/products-v1.component';
import { ShopWidgetsComponent } from '../../../layouts/shop-widgets/shop-widgets.component';
import { NewsletterV2Component } from '../../../components/newsletter-v2/newsletter-v2.component';

@Component({
  selector: 'app-products',
  imports: [
    BannerV1Component,
    ProductsV1Component,
    ShopWidgetsComponent,
    NewsletterV2Component
  ],
  templateUrl: './products.component.html',
})
export class ProductsComponent {

}
