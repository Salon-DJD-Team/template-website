import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teams-v2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teams-v2.component.html',
})
export class TeamsV2Component {
  teams = [
    {
      name: "Patrick Spencer",
      designation: "S&P Analyzer",
      image: "assets/images/resource/team-1.jpg",
      slug: "patrick-spencer",
      social: {
        facebook: "https://facebook.com/",
        youtube: "https://youtube.com/",
        twitter: "https://twitter.com/",
        instagram: "https://instagram.com/"
      }
    },
    {
      name: "Angelina Holy",
      designation: "Maxii's Manager",
      image: "assets/images/resource/team-2.jpg",
      slug: "angelina-holy",
      social: {
        facebook: "https://facebook.com/",
        youtube: "https://youtube.com/",
        twitter: "https://twitter.com/",
        instagram: "https://instagram.com/"
      }
    },
    {
      name: "Matthew White",
      designation: "Facebook's Co-Founder",
      image: "assets/images/resource/team-3.jpg",
      slug: "matthew-white",
      social: {
        facebook: "https://facebook.com/",
        youtube: "https://youtube.com/",
        twitter: "https://twitter.com/",
        instagram: "https://instagram.com/"
      }
    },
    {
      name: "Michael Dover",
      designation: "Starbuck's CEO",
      image: "assets/images/resource/team-4.jpg",
      slug: "michael-dover",
      social: {
        facebook: "https://facebook.com/",
        youtube: "https://youtube.com/",
        twitter: "https://twitter.com/",
        instagram: "https://instagram.com/"
      }
    },
    {
      name: "Janet Jones",
      designation: "Newyork Post's GM",
      image: "assets/images/resource/team-5.jpg",
      slug: "janet-jones",
      social: {
        facebook: "https://facebook.com/",
        youtube: "https://youtube.com/",
        twitter: "https://twitter.com/",
        instagram: "https://instagram.com/"
      }
    },
    {
      name: "Jane Hamilton",
      designation: "Starbuck's CEO",
      image: "assets/images/resource/team-6.jpg",
      slug: "jane-hamilton",
      social: {
        facebook: "https://facebook.com/",
        youtube: "https://youtube.com/",
        twitter: "https://twitter.com/",
        instagram: "https://instagram.com/"
      }
    }
  ];

  getAnimationDelay(index: number): string {
    return (index % 4) * 150 + 'ms';
  }

  getAnimationClass(index: number): string {
    return index < 4 ? 'fadeInLeft' : 'fadeInRight';
  }
}