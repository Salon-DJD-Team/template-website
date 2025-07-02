import { Component, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderV1Component } from './layouts/header-v1/header-v1.component';
import { HeaderV2Component } from './layouts/header-v2/header-v2.component';
import { HeaderOnepageV1Component } from './layouts/header-onepage-v1/header-onepage-v1.component';
import { HeaderOnepageV2Component } from './layouts/header-onepage-v2/header-onepage-v2.component';
import { FooterV1Component } from './layouts/footer-v1/footer-v1.component';
import { FooterV2Component } from './layouts/footer-v2/footer-v2.component';
import { FooterV3Component } from './layouts/footer-v3/footer-v3.component';
import { Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';

declare var jQuery: any;
declare var headerStyle: any;
declare var submenu_dropdown: any;
declare var mobile_menu: any;
declare var search_box: any;
declare var preloader: any;
declare var wow: any;
declare var custom_scroll: any;
declare var proller: any;
declare var newsletterPopup: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderV1Component,
    HeaderV2Component,
    HeaderOnepageV1Component,
    HeaderOnepageV2Component,
    FooterV1Component,
    FooterV2Component,
    FooterV3Component,
    CommonModule,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
  (function ($) {
    setTimeout(function(){
      headerStyle();
      submenu_dropdown();
      mobile_menu();
      search_box();
      preloader();
      wow();
      custom_scroll();
      proller();
      newsletterPopup();
      }, 100);
    })(jQuery);
  }

  currentHeader: string = 'v1';
  currentFooter: string = 'v2';
  showLayout: boolean = true;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  )
  {
    // Page Title
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      mergeMap((route) => route.data)
    )
    .subscribe((data) => {
      this.titleService.setTitle(data['title'] || 'Default App Title');
    });

    // Coming Soon
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Add all routes where header/footer should be hidden
        const hideOnRoutes = ['/coming-soon'];
        this.showLayout = !hideOnRoutes.includes(event.urlAfterRedirects);
      }
    });

    // Header & Footer
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;

        if (url === '/' || url.startsWith('/homepage-01')) {
          this.currentHeader = 'v1';
          this.currentFooter = 'v1';
        } else if (url.startsWith('/homepage-02')) {
          this.currentHeader = 'v1';
          this.currentFooter = 'v2';
        } else if (
          url.startsWith('/homepage-03') ||
          url.startsWith('/homepage-04') ||
          url.startsWith('/homepage-05') ||
          url.startsWith('/homepage-06')
        ) {
          this.currentHeader = 'v2';
          this.currentFooter = 'v3';
        } else if (url.startsWith('/onepage-01')) {
          this.currentHeader = 'onepage-v1';
          this.currentFooter = 'v1';
        } else if (url.startsWith('/onepage-02')) {
          this.currentHeader = 'onepage-v1';
          this.currentFooter = 'v2';
        } else if (
          url.startsWith('/onepage-03') ||
          url.startsWith('/onepage-04') ||
          url.startsWith('/onepage-05') ||
          url.startsWith('/onepage-06')
        ) {
          this.currentHeader = 'onepage-v2';
          this.currentFooter = 'v3';
        } else {
          this.currentHeader = 'v1';
          this.currentFooter = 'v2';
        }
        
      }
    });
  }
}
