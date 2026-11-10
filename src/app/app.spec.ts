import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the turf landing page and local logo', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Play More.');
    expect(compiled.querySelector('.brand img')?.getAttribute('src')).toBe('assets/logo.png');
    expect(compiled.querySelector('#pricing')).toBeTruthy();
  });

  it('should show all event photos in two opposite, duplicated tracks', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const rows = Array.from(compiled.querySelectorAll('.gallery-row'));
    const sequences = Array.from(compiled.querySelectorAll('.gallery-sequence'));

    expect(compiled.querySelector('.gallery-section h2')?.textContent).toContain('Moments from Our Turf');
    expect(compiled.querySelector('.gallery-intro p')?.textContent).toContain(
      'Explore the excitement, matches, events, and unforgettable moments captured at our turf.',
    );
    expect(rows).toHaveLength(2);
    expect(rows[0].classList.contains('gallery-row--right')).toBe(true);
    expect(rows[1].classList.contains('gallery-row--left')).toBe(true);
    expect(sequences).toHaveLength(4);
    expect(fixture.componentInstance.topGallery.length + fixture.componentInstance.bottomGallery.length).toBe(27);
    expect(
      Array.from(compiled.querySelectorAll('.gallery-image')).every(
        (image) => image.getAttribute('src')?.startsWith('assets/images/events/thumbnails/'),
      ),
    ).toBe(true);
    expect(compiled.querySelector('.gallery-showcase a')).toBeNull();
  });
});
