import { Component, HostListener, Renderer2, ElementRef } from '@angular/core';
import { NavigationComponent } from '../../layouts/navigation/navigation.component';
import { CartSidebarComponent } from '../../layouts/cart-sidebar/cart-sidebar.component';

@Component({
  selector: 'app-header-v1',
  imports: [
    NavigationComponent,
    CartSidebarComponent
  ],
  templateUrl: './header-v1.component.html',
})
export class HeaderV1Component {

}
