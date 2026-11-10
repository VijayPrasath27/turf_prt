import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  public isMenuOpen = false;

  public readonly business = {
    email: 'vcanbiturf.prt@gmail.com',
    address: 'Kumaran Street, 2nd Street, L.N. Puram, Panruti, Tamil Nadu, India.',
    primaryPhone: '+91 9524396478',
    secondaryPhone: '+91 9524366909',
    primaryPhoneDial: '+919524396478',
    secondaryPhoneDial: '+919524366909',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Kumaran%20Street%2C%20Second%20Street%2C%20L.N.%20Puram%2C%20Panruti%2C%20Tamil%20Nadu%2C%20India',
  };

  public readonly navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  public readonly trustIndicators = [
    'Premium Turf Surface',
    'Safe & Secure',
    '24-Hour Availability',
  ];

  public readonly pricingCards = [
    {
      title: 'Daytime Slots',
      time: '6:00 AM – 6:00 PM',
      price: '₹800',
      badge: 'DAYTIME PRICING',
      description: 'Enjoy your game in a refreshing daytime environment.',
      buttonLabel: 'Call to Book Daytime',
      phone: '+919524396478',
      features: [
        'Great for morning and afternoon games',
        'Ideal for practice and friendly matches',
        'Drinking water and changing room access',
      ],
    },
    {
      title: 'Nighttime Slots',
      time: '6:00 PM – 6:00 AM',
      price: '₹1,000',
      badge: 'NIGHTTIME PRICING',
      description: 'Enjoy exciting night matches with a dedicated playing environment.',
      buttonLabel: 'Call to Book Nighttime',
      phone: '+919524366909',
      features: [
        'Bright lighting for evening matches',
        'A great fit for teams and after-work games',
        'Drinking water and changing room access',
      ],
    },
  ];

  public readonly facilities = [
    {
      title: 'Premium Turf Surface',
      description: 'Enjoy a quality artificial turf playing surface designed for a better football experience.',
      icon: '⚽',
    },
    {
      title: 'Safe & Secure Environment',
      description: 'A playing environment designed with player safety and comfort in mind.',
      icon: '🛡️',
    },
    {
      title: 'Eco-Friendly Environment',
      description: 'Enjoy a thoughtfully maintained environment with an eco-conscious approach.',
      icon: '🌿',
    },
    {
      title: 'Drinking Water Facility',
      description: 'Stay refreshed with drinking water available at the facility.',
      icon: '💧',
    },
    {
      title: 'Changing Room Facility',
      description: 'Get ready for your game and freshen up with convenient changing room facilities.',
      icon: '🚿',
    },
    {
      title: 'Calm & Comfortable Environment',
      description: 'Enjoy your game in a comfortable environment away from everyday distractions.',
      icon: '🌤️',
    },
  ];

  public readonly benefits = [
    '24-hour turf availability.',
    'Transparent hourly pricing.',
    'Premium artificial turf surface.',
    'Player-friendly facilities.',
    'Drinking water availability.',
    'Changing room convenience.',
    'Calm and comfortable environment.',
    'Easy phone-based booking.',
  ];

  private readonly eventPhotos = [
    { fileName: 'SS007447.JPG', title: 'The VCANBI Elite Turf sign' },
    { fileName: 'SS007454.JPG', title: 'Players on the football turf' },
    { fileName: 'SS007582.JPG', title: 'Guests sharing a bouquet' },
    { fileName: 'SS007607.JPG', title: 'A ribbon-cutting moment' },
    { fileName: 'SS007613.JPG', title: 'A turf-side celebration with fireworks' },
    { fileName: 'SS007680.JPG', title: 'A traditional lamp-lighting ceremony' },
    { fileName: 'SS007683.JPG', title: 'Guests gathered around a ceremonial lamp' },
    { fileName: 'SS007727.JPG', title: 'A commemorative presentation' },
    { fileName: 'SS007833.JPG', title: 'Guests seated beside the turf' },
    { fileName: 'SS007834.JPG', title: 'A gathering on the turf' },
    { fileName: 'SS007848.JPG', title: 'Guests planting a sapling' },
    { fileName: 'SS007865.JPG', title: 'A sapling being planted at the turf' },
    { fileName: 'SS007880.JPG', title: 'Cricket activity on the turf' },
    { fileName: 'SS007883.JPG', title: 'Cricket practice on the turf' },
    { fileName: 'SS007901.JPG', title: 'Guests seated at a gathering' },
    { fileName: 'SS007907.JPG', title: 'A guest speaking at the gathering' },
    { fileName: 'SS007911.JPG', title: 'A speaker addressing the gathering' },
    { fileName: 'SS007924.JPG', title: 'A speaker on the turf' },
    { fileName: 'SS007979.JPG', title: 'Guests celebrating together on the turf' },
    { fileName: 'SS008015.JPG', title: 'A dance performance at the celebration' },
    { fileName: 'SS008034.JPG', title: 'Guests gathered together' },
    { fileName: 'SS008091.JPG', title: 'Guests dancing at the gathering' },
    { fileName: 'SS008093.JPG', title: 'A photographer capturing the event' },
    { fileName: 'SS008103.JPG', title: 'Guests celebrating in front of the VCANBI display' },
    { fileName: 'SS008104.JPG', title: 'Guests dancing at the celebration' },
    { fileName: 'SS008105.JPG', title: 'Guests celebrating together' },
    { fileName: 'SS008269.JPG', title: 'A guest speaking at the event' },
  ];

  public readonly gallery = this.eventPhotos.map(({ fileName, title }) => ({
    title,
    image: `assets/images/events/thumbnails/${fileName}`,
  }));

  public readonly topGallery = this.gallery.filter((_, index) => index % 2 === 0);
  public readonly bottomGallery = this.gallery.filter((_, index) => index % 2 !== 0);
  public readonly galleryCopies = [0, 1] as const;

  public readonly bookingSteps = [
    {
      number: '01',
      title: 'Choose Your Time',
      description: 'Select your preferred daytime or nighttime slot.',
    },
    {
      number: '02',
      title: 'Give Us a Call',
      description: 'Contact our team to check availability.',
    },
    {
      number: '03',
      title: 'Confirm Your Game',
      description: 'Confirm your slot directly over the phone and get ready to play.',
    },
  ];

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public closeMenu(): void {
    this.isMenuOpen = false;
  }
}
