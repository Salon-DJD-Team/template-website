import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features-v3',
  imports: [CommonModule],
  templateUrl: './features-v3.component.html',
})
export class FeaturesV3Component {

  topFeatures = [
    {
      icon: 'flaticon-megaphone-1',
      title: 'Great Speakers',
      description: 'The little rotter grub skive off blag ruddy say gutted mate, my lady brown bread nancy boy.',
      slug: 'great-speakers'
    },
    {
      icon: 'flaticon-arrows',
      title: 'Participants',
      description: 'The little rotter grub skive off blag ruddy say gutted mate, my lady brown bread nancy boy.',
      slug: 'participants'
    },
    {
      icon: 'flaticon-deal',
      title: 'Proud Sponsors',
      description: 'The little rotter grub skive off blag ruddy say gutted mate, my lady brown bread nancy boy.',
      slug: 'proud-sponsors'
    }
  ];
  
}
