import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {
  id: number;
  iconClass: string;
  title: string;
  slug: string;
  animationDelay: string;
}

@Component({
  selector: 'app-features-v1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features-v1.component.html',
})
export class FeaturesV1Component {
  features: Feature[] = [
    {
      id: 1,
      iconClass: "flaticon-policy",
      title: "Best Certified Speaker",
      slug: "best-certified-speaker",
      animationDelay: "0ms"
    },
    {
      id: 2,
      iconClass: "flaticon-digital-learning",
      title: "Brands Digital Ideas",
      slug: "brands-digital-ideas",
      animationDelay: "150ms"
    },
    {
      id: 3,
      iconClass: "flaticon-conversation-1",
      title: "Communicate People",
      slug: "communicate-people",
      animationDelay: "300ms"
    },
    {
      id: 4,
      iconClass: "flaticon-inspiration",
      title: "Well Inspiring Keynotes",
      slug: "well-inspiring-keynotes",
      animationDelay: "450ms"
    }
  ];

}