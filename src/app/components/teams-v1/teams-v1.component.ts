import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teams-v1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teams-v1.component.html',
})
export class TeamsV1Component {
  teams = [
    {
      name: "Patrick Spencer",
      designation: "S&P Analyzer",
      image: "assets/images/resource/speaker-1.jpg",
      slug: "patrick-spencer",
      social: {
        facebook: "https://facebook.com/",
        youtube: "https://youtube.com/",
        twitter: "https://twitter.com/"
      }
    },
    {
      name: "Angelina Holy",
      designation: "Maxii's Manager",
      image: "assets/images/resource/speaker-2.jpg",
      slug: "angelina-holy",
      social: {
        facebook: "https://facebook.com/",
        youtube: "https://youtube.com/",
        twitter: "https://twitter.com/"
      }
    },
    {
      name: "Matthew White",
      designation: "Facebook's Co-Founder",
      image: "assets/images/resource/speaker-3.jpg",
      slug: "matthew-white",
      social: {
        facebook: "https://facebook.com/",
        youtube: "https://youtube.com/",
        twitter: "https://twitter.com/"
      }
    },
    {
      name: "Michael Dover",
      designation: "Starbuck's CEO",
      image: "assets/images/resource/speaker-4.jpg",
      slug: "michael-dover",
      social: {
        facebook: "https://facebook.com/",
        youtube: "https://youtube.com/",
        twitter: "https://twitter.com/"
      }
    },
    {
      name: "Janet Jones",
      designation: "Newyork Post's GM",
      image: "assets/images/resource/speaker-5.jpg",
      slug: "janet-jones",
      social: {
        facebook: "https://facebook.com/",
        youtube: "https://youtube.com/",
        twitter: "https://twitter.com/"
      }
    },
    {
      name: "Jane Hamilton",
      designation: "Starbuck's CEO",
      image: "assets/images/resource/speaker-6.jpg",
      slug: "jane-hamilton",
      social: {
        facebook: "https://facebook.com/",
        youtube: "https://youtube.com/",
        twitter: "https://twitter.com/"
      }
    },
    {
      name: "Jenson Button",
      designation: "Softer Manager",
      image: "assets/images/resource/speaker-7.jpg",
      slug: "jenson-button",
      social: {
        facebook: "https://facebook.com/",
        youtube: "https://youtube.com/",
        twitter: "https://twitter.com/"
      }
    },
    {
      name: "Harnold Min",
      designation: "Starbuck's CEO",
      image: "assets/images/resource/speaker-8.jpg",
      slug: "harnold-min",
      social: {
        facebook: "https://facebook.com/",
        youtube: "https://youtube.com/",
        twitter: "https://twitter.com/"
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