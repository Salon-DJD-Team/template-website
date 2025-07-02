import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-price-plan-v3',
  imports: [CommonModule],
  templateUrl: './price-plan-v3.component.html',
})
export class PricePlanV3Component {

  pricing = [
    {
      "title": "Standard Pass",
      "price": "$120",
      "duration": "1 DAY",
      "pattern": "assets/images/background/price-bg-1.png",
      "options": [
        {
          "title": "Full Conference",
          "text": "(Includes workshop, coffee etc)",
          "light": false
        },
        {
          "title": "Live Videos",
          "text": "(Can access online free)",
          "light": true
        },
        {
          "title": "Meet Speaker",
          "text": "(Ask questions privately)",
          "light": true
        }
      ],
      "buttonText": "Buy Ticket",
      "buttonLink": "#",
      "charges": "Our prices includes 10% charges"
    },
    {
      "title": "Standard Pass",
      "price": "$220",
      "duration": "2 DAY",
      "pattern": "assets/images/background/price-bg-2.png",
      "options": [
        {
          "title": "Full Conference",
          "text": "(Includes workshop, coffee etc)",
          "light": false
        },
        {
          "title": "Live Videos",
          "text": "(Can access online free)",
          "light": false
        },
        {
          "title": "Meet Speaker",
          "text": "(Ask questions privately)",
          "light": true
        }
      ],
      "buttonText": "Buy Ticket",
      "buttonLink": "#",
      "charges": "Our prices includes 10% charges"
    },
    {
      "title": "Standard Pass",
      "price": "$320",
      "duration": "3 DAY",
      "pattern": "assets/images/background/price-bg-3.png",
      "options": [
        {
          "title": "Full Conference",
          "text": "(Includes workshop, coffee etc)",
          "light": false
        },
        {
          "title": "Live Videos",
          "text": "(Can access online free)",
          "light": false
        },
        {
          "title": "Meet Speaker",
          "text": "(Ask questions privately)",
          "light": false
        }
      ],
      "buttonText": "Buy Ticket",
      "buttonLink": "#",
      "charges": "Our prices includes 10% charges"
    }
  ]

}
