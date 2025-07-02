import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-v1',
  imports: [],
  templateUrl: './footer-v1.component.html',
})
export class FooterV1Component {

  // Current Year
  currentYear: number = new Date().getFullYear();
  
}
