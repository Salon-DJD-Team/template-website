import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var jQuery: any;
declare var accordion_box: any;

@Component({
  selector: 'app-faqs-v2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faqs-v2.component.html',
})
export class FaqsV2Component implements AfterViewInit {

  ngAfterViewInit(): void {
	(function ($) {
		setTimeout(function(){
			accordion_box();
		  }, 100);
	  })(jQuery);
  }

  faqs = [
    {
      question: "What About My Learning Lab Workshop Options?",
      answer: "Learning Lab registrations will also be rolled over to 2024 conference. The learning lab workshop schedule will be revised for 2024, and we will announce the new schedule when it is available."
    },
    {
      question: "How Do I Rollover My Conference Registration?",
      answer: "Learning Lab registrations will also be rolled over to 2024 conference. The learning lab workshop schedule will be revised for 2024, and we will announce the new schedule when it is available."
    },
    {
      question: "How Do I Cancel My Hotel Reservation?",
      answer: "Learning Lab registrations will also be rolled over to 2024 conference. The learning lab workshop schedule will be revised for 2024, and we will announce the new schedule when it is available."
    },
    {
      question: "When is The Next APQC Conference?",
      answer: "Learning Lab registrations will also be rolled over to 2024 conference. The learning lab workshop schedule will be revised for 2024, and we will announce the new schedule when it is available."
    },
    {
      question: "How Do You Prepare For a Conference?",
      answer: "Learning Lab registrations will also be rolled over to 2024 conference. The learning lab workshop schedule will be revised for 2024, and we will announce the new schedule when it is available."
    },
    {
      question: "What questions should be ask in a conference?",
      answer: "Learning Lab registrations will also be rolled over to 2024 conference. The learning lab workshop schedule will be revised for 2024, and we will announce the new schedule when it is available."
    },
    {
      question: "What is Conferenziaworld?",
      answer: "Learning Lab registrations will also be rolled over to 2024 conference. The learning lab workshop schedule will be revised for 2024, and we will announce the new schedule when it is available."
    }
  ]
  
}