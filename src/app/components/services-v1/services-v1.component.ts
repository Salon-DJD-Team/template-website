import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-v1',
  imports: [CommonModule],
  templateUrl: './services-v1.component.html',
})
export class ServicesV1Component {

  services = [
    {
      icon: 'flaticon-connection',
      title: 'Networking',
      description: 'Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor.',
      slug: 'networking'
    },
    {
      icon: 'flaticon-book',
      title: 'Learning',
      description: 'Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor.',
      slug: 'learning'
    },
    {
      icon: 'flaticon-idea',
      title: 'Spark New ideas',
      description: 'Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor.',
      slug: 'spark-new-ideas'
    }
  ];

  getAnimationClass(index: number): string {
    // Cycle animations if needed
    return ['fadeInLeft', 'fadeInRight', 'fadeInUp'][index % 3];
  }

}
