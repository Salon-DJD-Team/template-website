import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

declare var jQuery: any;
declare var magnific_image: any;

@Component({
  selector: 'app-about-us-v1',
  imports: [CommonModule],
  templateUrl: './about-us-v1.component.html',
})
export class AboutUsV1Component implements AfterViewInit {
  constructor(private router: Router) {}

  currentRoute: string = '';
  ngOnInit(): void {
    this.currentRoute = this.router.url;
  }

  ngAfterViewInit(): void {
  (function ($) {
    setTimeout(function(){
      magnific_image();
      }, 100);
    })(jQuery);
  }

}