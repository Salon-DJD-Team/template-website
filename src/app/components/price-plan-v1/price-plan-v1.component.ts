import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-price-plan-v1',
  imports: [CommonModule],
  templateUrl: './price-plan-v1.component.html',
})
export class PricePlanV1Component {

  pricing = [
    {
      "title": "Standard Pass",
      "price": "$120",
      "day": "1 DAY",
      "backgroundPattern": "assets/images/background/price-1.png",
      "backgroundPatternTwo": "assets/images/background/price-1-1.png",
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
      "button": {
        "text": "Buy Ticket",
        "link": "#",
        "style": "btn-style-two"
      },
      "chargesNote": "Our prices includes 10% charges",
      "animation": { "effect": "fadeInLeft", "delay": "0ms", "duration": "1500ms" }
    },
    {
      "title": "Flexible Pass",
      "price": "$220",
      "day": "2 DAY",
      "backgroundPattern": "assets/images/background/price-2.png",
      "backgroundPatternTwo": "assets/images/background/price-2-1.png",
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
      "button": {
        "text": "Buy Ticket",
        "link": "#",
        "style": "btn-style-two"
      },
      "chargesNote": "Our prices includes 10% charges",
      "animation": { "effect": "fadeInUp", "delay": "0ms", "duration": "1500ms" }
    },
    {
      "title": "Business Pass",
      "price": "$320",
      "day": "3 DAY",
      "backgroundPattern": "assets/images/background/price-3.png",
      "backgroundPatternTwo": "assets/images/background/price-3-1.png",
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
      "button": {
        "text": "Buy Ticket",
        "link": "#",
        "style": "btn-style-two"
      },
      "chargesNote": "Our prices includes 10% charges",
      "animation": { "effect": "fadeInRight", "delay": "0ms", "duration": "1500ms" }
    }
  ]


  // pricing = [
  //   {
  //     "title": "Standard Pass",
  //     "price": "$120",
  //     "day": "1 DAY",
  //     "pattern": "assets/images/background/price-1.png",
  //     "options": [
  //         {
  //         "feature": "Full Conference",
  //         "description": "Includes workshop, coffee etc",
  //         "emphasis": "strong",
  //         "class": ""
  //       },
  //       {
  //         "feature": "Live Videos",
  //         "description": "Can access online free",
  //         "emphasis": "strong",
  //         "class": "light"
  //       },
  //       {
  //         "feature": "Meet Speaker",
  //         "description": "Ask questions privately",
  //         "emphasis": "strong",
  //         "class": "light"
  //       }
  //     ],
  //     "buttonText": "Buy Ticket",
  //     "buttonLink": "#",
  //     "charges": "Our prices includes 10% charges"
  //   },
  //   {
  //     "title": "Flexible Pass",
  //     "price": "$220",
  //     "day": "2 DAY",
  //     "pattern": "assets/images/background/price-bg-2.png",
  //     "options": [
  //       {
  //         "feature": "Full Conference",
  //         "description": "Includes workshop, coffee etc",
  //         "emphasis": "strong",
  //         "class": "light"
  //       },
  //       {
  //         "feature": "Live Videos",
  //         "description": "Can access online free",
  //         "emphasis": "strong",
  //         "class": "light"
  //       },
  //       {
  //         "feature": "Meet Speaker",
  //         "description": "Ask questions privately",
  //         "emphasis": "strong",
  //         "class": "light"
  //       }
  //     ],
  //     "buttonText": "Buy Ticket",
  //     "buttonLink": "#",
  //     "charges": "Our prices includes 10% charges"
  //   },
  //   {
  //     "title": "Business Pass",
  //     "price": "$320",
  //     "day": "3 DAY",
  //     "pattern": "assets/images/background/price-bg-3.png",
  //     "options": [
  //       {
  //         "feature": "Full Conference",
  //         "description": "Includes workshop, coffee etc",
  //         "emphasis": "strong",
  //         "class": ""
  //       },
  //       {
  //         "feature": "Live Videos",
  //         "description": "Can access online free",
  //         "emphasis": "strong",
  //         "class": "light"
  //       },
  //       {
  //         "feature": "Meet Speaker",
  //         "description": "Ask questions privately",
  //         "emphasis": "strong",
  //         "class": "light"
  //       }
  //     ],
  //     "buttonText": "Buy Ticket",
  //     "buttonLink": "#",
  //     "charges": "Our prices includes 10% charges"
  //   }
  // ]
  

}
