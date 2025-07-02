import { Routes } from '@angular/router';

export const routes: Routes = [

    // Home V1
    {
        path: '',
        loadComponent: () => import('./pages/home-v1/home-v1.component').then((m) => m.HomeV1Component),
        data: {
            title: 'Homepage V1',
        }
    },

    // Home V2
    {
        path: 'homepage-02',
        loadComponent: () => import('./pages/home-v2/home-v2.component').then((m) => m.HomeV2Component),
        data: {
            title: 'Homepage V2',
        }
    },

    // Home V3
    {
        path: 'homepage-03',
        loadComponent: () => import('./pages/home-v3/home-v3.component').then((m) => m.HomeV3Component),
        data: {
            title: 'Homepage V3',
        }
    },

    // Home V4
    {
        path: 'homepage-04',
        loadComponent: () => import('./pages/home-v4/home-v4.component').then((m) => m.HomeV4Component),
        data: {
            title: 'Homepage V4',
        }
    },

    // Home V5
    {
        path: 'homepage-05',
        loadComponent: () => import('./pages/home-v5/home-v5.component').then((m) => m.HomeV5Component),
        data: {
            title: 'Homepage V5',
        }
    },

    // Home V6
    {
        path: 'homepage-06',
        loadComponent: () => import('./pages/home-v6/home-v6.component').then((m) => m.HomeV6Component),
        data: {
            title: 'Homepage V6',
        }
    },

    // OnePage V1
    {
        path: 'onepage-01',
        loadComponent: () => import('./pages/onepage-v1/onepage-v1.component').then((m) => m.OnepageV1Component),
        data: {
            title: 'OnePage V1',
        }
    },

    // OnePage V2
    {
        path: 'onepage-02',
        loadComponent: () => import('./pages/onepage-v2/onepage-v2.component').then((m) => m.OnepageV2Component),
        data: {
            title: 'OnePage V2',
        }
    },

    // OnePage V3
    {
        path: 'onepage-03',
        loadComponent: () => import('./pages/onepage-v3/onepage-v3.component').then((m) => m.OnepageV3Component),
        data: {
            title: 'OnePage V3',
        }
    },

    // OnePage V4
    {
        path: 'onepage-04',
        loadComponent: () => import('./pages/onepage-v4/onepage-v4.component').then((m) => m.OnepageV4Component),
        data: {
            title: 'OnePage V4',
        }
    },

    // OnePage V5
    {
        path: 'onepage-05',
        loadComponent: () => import('./pages/onepage-v5/onepage-v5.component').then((m) => m.OnepageV5Component),
        data: {
            title: 'OnePage V5',
        }
    },

    // OnePage V6
    {
        path: 'onepage-06',
        loadComponent: () => import('./pages/onepage-v6/onepage-v6.component').then((m) => m.OnepageV6Component),
        data: {
            title: 'OnePage V6',
        }
    },

    // About Us
    {
        path: 'about-us',
        loadComponent: () => import('./pages/about-us/about-us.component').then((m) => m.AboutUsComponent),
        data: {
            title: 'About Us',
        }
    },

    // FAQs
    {
        path: 'faqs',
        loadComponent: () => import('./pages/faqs/faqs.component').then((m) => m.FaqsComponent),
        data: {
            title: 'FAQs',
        }
    },

    // Price
    {
        path: 'price',
        loadComponent: () => import('./pages/price/price.component').then((m) => m.PriceComponent),
        data: {
            title: 'Price',
        }
    },

    // Schedule
    {
        path: 'schedule',
        loadComponent: () => import('./pages/schedule/schedule.component').then((m) => m.ScheduleComponent),
        data: {
            title: 'Schedule',
        }
    },

    // Gallery
    {
        path: 'gallery',
        loadComponent: () => import('./pages/gallery/gallery.component').then((m) => m.GalleryComponent),
        data: {
            title: 'Gallery',
        }
    },

    // Testimonial
    {
        path: 'testimonial',
        loadComponent: () => import('./pages/testimonial/testimonial.component').then((m) => m.TestimonialComponent),
        data: {
            title: 'Testimonial',
        }
    },

    // Coming Soon
    {
        path: 'coming-soon',
        loadComponent: () => import('./pages/coming-soon/coming-soon.component').then((m) => m.ComingSoonComponent),
        data: {
            title: 'Coming Soon',
        }
    },

    // Terms & Condition
    {
        path: 'terms-conditions',
        loadComponent: () => import('./pages/terms-and-conditions/terms-and-conditions.component').then((m) => m.TermsAndConditionsComponent),
        data: {
            title: 'Terms & Conditions',
        }
    },

    // Privacy Policy
    {
        path: 'privacy-policy',
        loadComponent: () => import('./pages/privacy-policy/privacy-policy.component').then((m) => m.PrivacyPolicyComponent),
        data: {
            title: 'Privacy Policy',
        }
    },

    // Speakers
    {
        path: 'speakers',
        loadComponent: () => import('./pages/speakers/speakers.component').then((m) => m.SpeakersComponent),
        data: {
            title: 'Speakers',
        }
    },

    // Speakers Details
    {
        path: 'speaker-details/:slug',
        loadComponent: () => import('./pages/speaker-details/speaker-details.component').then((m) => m.SpeakerDetailsComponent),
        data: {
            title: 'Speakers Details',
        }
    },

    // Events
    {
        path: 'events',
        loadComponent: () => import('./pages/events/events.component').then((m) => m.EventsComponent),
        data: {
            title: 'Events',
        }
    },

    // Events Details
    {
        path: 'event-details/:slug',
        loadComponent: () => import('./pages/event-details/event-details.component').then((m) => m.EventDetailsComponent),
        data: {
            title: 'Events Details',
        }
    },

    // Blogs V1
    {
        path: 'blog-v1',
        loadComponent: () => import('./pages/blog-v1/blog-v1.component').then((m) => m.BlogV1Component),
        data: {
            title: 'Blogs V1',
        }
    },

    // Blogs V2
    {
        path: 'blog-v2',
        loadComponent: () => import('./pages/blog-v2/blog-v2.component').then((m) => m.BlogV2Component),
        data: {
            title: 'Blogs V2',
        }
    },

    // Blogs Classic
    {
        path: 'blog-classic',
        loadComponent: () => import('./pages/blog-classic/blog-classic.component').then((m) => m.BlogClassicComponent),
        data: {
            title: 'Blogs Classic',
        }
    },

    // Blogs Details
    {
        path: 'blog-details/:slug',
        loadComponent: () => import('./pages/blog-details/blog-details.component').then((m) => m.BlogDetailsComponent),
        data: {
            title: 'Blogs Details',
        }
    },

    // Contact Us 01
    {
        path: 'contact-us-01',
        loadComponent: () => import('./pages/contact-01/contact-01.component').then((m) => m.Contact01Component),
        data: {
            title: 'Contact Us 01',
        }
    },

    // Contact Us 02
    {
        path: 'contact-us-02',
        loadComponent: () => import('./pages/contact-02/contact-02.component').then((m) => m.Contact02Component),
        data: {
            title: 'Contact Us 02',
        }
    },

    // Contact Us 03
    {
        path: 'contact-us-03',
        loadComponent: () => import('./pages/contact-03/contact-03.component').then((m) => m.Contact03Component),
        data: {
            title: 'Contact Us 03',
        }
    },

    // Products
    {
        path: 'products',
        loadComponent: () => import('./pages/shop/products/products.component').then((m) => m.ProductsComponent),
        data: {
            title: 'Products',
        }
    },

    // Product Details
    {
        path: 'product-details/:slug',
        loadComponent: () => import('./pages/shop/product-details/product-details.component').then((m) => m.ProductDetailsComponent),
        data: {
            title: 'Product Details',
        }
    },

    // Cart
    {
        path: 'cart',
        loadComponent: () => import('./pages/shop/cart/cart.component').then((m) => m.CartComponent),
        data: {
            title: 'Cart',
        }
    },

    // Checkout
    {
        path: 'checkout',
        loadComponent: () => import('./pages/shop/checkout/checkout.component').then((m) => m.CheckoutComponent),
        data: {
            title: 'Checkout',
        }
    },

    // My Account
    {
        path: 'my-account',
        loadComponent: () => import('./pages/shop/my-account/my-account.component').then((m) => m.MyAccountComponent),
        data: {
            title: 'My Account',
        }
    },

    // Login
    {
        path: 'login',
        loadComponent: () => import('./pages/shop/login/login.component').then((m) => m.LoginComponent),
        data: {
            title: 'Login',
        }
    },

    // 404 Page
    {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found.component').then((m) => m.NotfoundComponent),
        data: {
            title: '404 Not Found',
        }
      }
];
