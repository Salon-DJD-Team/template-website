import { Component } from '@angular/core';
import { BannerV1Component } from '../../../layouts/banner-v1/banner-v1.component';
import { NewsletterV2Component } from '../../../components/newsletter-v2/newsletter-v2.component';

@Component({
  selector: 'app-login',
  imports: [
    BannerV1Component,
    NewsletterV2Component
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent {

}
