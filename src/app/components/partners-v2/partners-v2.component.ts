import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partners-v2',
  imports: [
    CommonModule
  ],
  templateUrl: './partners-v2.component.html',
})
export class PartnersV2Component {
  currentRoute: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.currentRoute = this.router.url;
  }

  partners = [
    {
      image: "assets/images/clients/1.png",
      url: '#',
    },
    {
      image: "assets/images/clients/2.png",
      url: '#',
    },
    {
      image: "assets/images/clients/3.png",
      url: '#',
    },
    {
      image: "assets/images/clients/4.png",
      url: '#',
    },
    {
      image: "assets/images/clients/5.png",
      url: '#',
    },
    {
      image: "assets/images/clients/6.png",
      url: '#',
    },
    {
      image: "assets/images/clients/7.png",
      url: '#',
    },
    {
      image: "assets/images/clients/8.png",
      url: '#',
    },
  ];
}
