import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var jQuery: any;
declare var two_item_carousel: any;

@Component({
  selector: 'app-testimonials-v1',
  imports: [CommonModule],
  templateUrl: './testimonials-v1.component.html',
})
export class TestimonialsV1Component implements AfterViewInit {

  ngAfterViewInit(): void {
	(function ($) {
		setTimeout(function(){
			two_item_carousel();
		  }, 100);
	  })(jQuery);
  }

  testimonials = [
	{
		"text": "Petierunt uti sibi concilium totius Galliae in diem certam indicere. Dolor sit amet eiusmod consectetur elit sed tempor incd idunt labore et dolore magna aliqua.",
		"authorImage": "assets/images/resource/author-1.jpg",
		"authorName": "Monszil Baker",
		"authorRole": "Development Expert",
		"rating": 5,
		"quoteIcon": "flaticon-quote"
	},
	{
		"text": "Petierunt uti sibi concilium totius Galliae in diem certam indicere. Dolor sit amet eiusmod consectetur elit sed tempor incd idunt labore et dolore magna aliqua.",
		"authorImage": "assets/images/resource/author-2.jpg",
		"authorName": "Micheal Wolk",
		"authorRole": "Marketing Expert",
		"rating": 4,
		"quoteIcon": "flaticon-quote"
	},
	{
		"text": "Petierunt uti sibi concilium totius Galliae in diem certam indicere. Dolor sit amet eiusmod consectetur elit sed tempor incd idunt labore et dolore magna aliqua.",
		"authorImage": "assets/images/resource/author-1.jpg",
		"authorName": "Monszil Baker",
		"authorRole": "Development Expert",
		"rating": 5,
		"quoteIcon": "flaticon-quote"
	},
	{
		"text": "Petierunt uti sibi concilium totius Galliae in diem certam indicere. Dolor sit amet eiusmod consectetur elit sed tempor incd idunt labore et dolore magna aliqua.",
		"authorImage": "assets/images/resource/author-2.jpg",
		"authorName": "Micheal Wolk",
		"authorRole": "Marketing Expert",
		"rating": 4,
		"quoteIcon": "flaticon-quote"
	}
	]

}
