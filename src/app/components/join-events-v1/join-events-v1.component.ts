import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-join-events-v1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './join-events-v1.component.html',
})
export class JoinEventsV1Component {

  events = [
    {
      id: 1,
      iconClass: 'flaticon-group',
      title: 'Person Networking',
      slug: 'person-networking'
    },
    {
      id: 2,
      iconClass: 'flaticon-mic',
      title: 'Boost Creativity',
      slug: 'boost-creativity'
    },
    {
      id: 3,
      iconClass: 'flaticon-poinsettia',
      title: 'After Party Events',
      slug: 'after-party-events'
    },
    {
      id: 4,
      iconClass: 'flaticon-thumbs-up',
      title: 'Great Speaker',
      slug: 'great-speaker'
    },
    {
      id: 5,
      iconClass: 'flaticon-creative-mind',
      title: 'Spark Creativity',
      slug: 'spark-creativity'
    },
    {
      id: 6,
      iconClass: 'flaticon-arrows',
      title: 'Potential Clients',
      slug: 'potential-clients'
    }
  ];

}
