import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var jQuery: any;
declare var magnific_image: any;

@Component({
  selector: 'app-products-v1',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './products-v1.component.html',
})
export class ProductsV1Component implements AfterViewInit {

  ngAfterViewInit(): void {
  (function ($) {
    setTimeout(function(){
      magnific_image();
      }, 100);
    })(jQuery);
  }

  products = [
    {
      name: 'BCI Boot Sensor',
      image: 'assets/images/resource/products/4.jpg',
      price: '$20.00',
      rating: 5,
      slug: 'bci-boot-sensor'
    },
    {
      name: 'Safety Masks',
      image: 'assets/images/resource/products/5.jpg',
      price: '$15.00',
      rating: 4,
      slug: 'safety-masks'
    },
    {
      name: 'Digital Weight',
      image: 'assets/images/resource/products/6.jpg',
      price: '$18.00',
      rating: 4,
      slug: 'digital-weight'
    },
    {
      name: 'Hand Sanitizer',
      image: 'assets/images/resource/products/7.jpg',
      price: '$10.00',
      rating: 5,
      slug: 'hand-sanitizer'
    },
    {
      name: 'Lab Machine',
      image: 'assets/images/resource/products/8.jpg',
      price: '$31.00',
      rating: 4,
      slug: 'lab-machine'
    },
    {
      name: 'Bill Machine',
      image: 'assets/images/resource/products/9.jpg',
      price: '$13.00',
      rating: 4,
      slug: 'bill-machine'
    },
    {
      name: 'Stethoscope',
      image: 'assets/images/resource/products/10.jpg',
      price: '$23.00',
      rating: 5,
      slug: 'stethoscope'
    },
    {
      name: 'Temperature',
      image: 'assets/images/resource/products/11.jpg',
      price: '$23.00',
      discount: '$20.00',
      rating: 4,
      slug: 'temperature'
    },
    {
      name: 'Bp Machine',
      image: 'assets/images/resource/products/12.jpg',
      price: '$45.00',
      rating: 5,
      slug: 'bp-machine'
    },
    {
      name: 'Thermometer',
      image: 'assets/images/resource/products/13.jpg',
      price: '$25.00',
      rating: 4,
      slug: 'thermometer'
    },
    {
      name: 'Thermometer',
      image: 'assets/images/resource/products/14.jpg',
      price: '$25.00',
      rating: 4,
      slug: 'thermometer-2'
    },
    {
      name: 'Microscope',
      image: 'assets/images/resource/products/15.jpg',
      price: '$25.00',
      rating: 5,
      slug: 'microscope'
    },
    {
      name: 'Bp Machine',
      image: 'assets/images/resource/products/16.jpg',
      price: '$25.00',
      rating: 4,
      slug: 'bp-machine-2'
    },
    {
      name: 'Health Chart',
      image: 'assets/images/resource/products/17.jpg',
      price: '$25.00',
      rating: 4,
      slug: 'health-chart'
    },
    {
      name: 'Bp Machine',
      image: 'assets/images/resource/products/18.jpg',
      price: '$25.00',
      rating: 5,
      slug: 'bp-machine-3'
    },
    {
      name: 'Syringe',
      image: 'assets/images/resource/products/19.jpg',
      price: '$25.00',
      rating: 4,
      slug: 'syringe'
    }
  ];

  currentPage = 1;
  itemsPerPage = 12;

  get paginatedProducts() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.products.slice(start, start + this.itemsPerPage);
  }

  get totalPages(): number[] {
    return Array(Math.ceil(this.products.length / this.itemsPerPage))
      .fill(0)
      .map((_, i) => i + 1);
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  nextPage() {
    if (this.currentPage < this.totalPages.length) this.currentPage++;
  }

}
