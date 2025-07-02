import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-price-plan-v2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './price-plan-v2.component.html',
})
export class PricePlanV2Component {
  currentRoute: string = '';
  
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.currentRoute = this.router.url;
  }

  pricing = [
    {
      "day": "FIRST DAY",
      "title": "Standard Pass",
      "price": "$120",
      "options": [
        {
          "feature": "Full Conference",
          "description": "Includes workshop, coffee etc",
          "emphasis": "strong",
          "class": ""
        },
        {
          "feature": "Live Videos",
          "description": "Can access online free",
          "emphasis": "strong",
          "class": "light"
        },
        {
          "feature": "Meet Speaker",
          "description": "Ask questions privately",
          "emphasis": "strong",
          "class": "light"
        }
      ],
      "button": {
        "url": "#",
        "button": "Buy Ticket",
        "class": "theme-btn btn-style-one"
      },
      "charges_note": "Our prices includes 10% charges"
    },
    {
      "day": "second DAY",
      "title": "Flexible Pass",
      "price": "$220",
      "options": [
        {
          "feature": "Full Conference",
          "description": "Includes workshop, coffee etc",
          "emphasis": "strong",
          "class": ""
        },
        {
          "feature": "Live Videos",
          "description": "Can access online free",
          "emphasis": "strong",
          "class": ""
        },
        {
          "feature": "Meet Speaker",
          "description": "Ask questions privately",
          "emphasis": "strong",
          "class": "light"
        }
      ],
      "button": {
        "url": "#",
        "button": "Buy Ticket",
        "class": "theme-btn btn-style-one"
      },
      "charges_note": "Our prices includes 10% charges"
    },
    {
      "day": "third DAY",
      "title": "Business Pass",
      "price": "$320",
      "options": [
        {
          "feature": "Full Conference",
          "description": "Includes workshop, coffee etc",
          "emphasis": "strong",
          "class": ""
        },
        {
          "feature": "Live Videos",
          "description": "Can access online free",
          "emphasis": "strong",
          "class": ""
        },
        {
          "feature": "Meet Speaker",
          "description": "Ask questions privately",
          "emphasis": "strong",
          "class": ""
        }
      ],
      "button": {
        "url": "#",
        "button": "Buy Ticket",
        "class": "theme-btn btn-style-one"
      },
      "charges_note": "Our prices includes 10% charges"
    }
  ]
  
}