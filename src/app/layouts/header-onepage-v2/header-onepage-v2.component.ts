import { Component, HostListener, Renderer2, AfterViewInit, ElementRef } from '@angular/core';
import { CartSidebarComponent } from '../../layouts/cart-sidebar/cart-sidebar.component';

declare var jQuery: any;
declare var scroll_nav: any;

@Component({
  selector: 'app-header-onepage-v2',
  imports: [
    CartSidebarComponent
  ],
  templateUrl: './header-onepage-v2.component.html',
})
export class HeaderOnepageV2Component {

  ngAfterViewInit(): void {
  (function ($) {
    setTimeout(function(){
      scroll_nav();
      }, 100);
    })(jQuery);
  }

}
