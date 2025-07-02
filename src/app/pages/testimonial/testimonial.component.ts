import { Component } from '@angular/core';
import { BannerV1Component } from '../../layouts/banner-v1/banner-v1.component';
import { TestimonialsV2Component } from '../../components/testimonials-v2/testimonials-v2.component';
import { NewsletterV2Component } from '../../components/newsletter-v2/newsletter-v2.component';

@Component({
  selector: 'app-testimonial',
  imports: [
    BannerV1Component,
    TestimonialsV2Component,
    NewsletterV2Component
  ],
  templateUrl: './testimonial.component.html',
})
export class TestimonialComponent {

}
