import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { ConcertComponent } from './components/concert/concert.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShangoComponent } from './components/shango/shango.component';
import { BandComponent } from './components/band/band.component';
import { StudioComponent } from './components/studio/studio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HeaderComponent,
    GalleryComponent,
    AboutComponent,
    ContactComponent,
    ConcertComponent,
    NavComponent,
    FooterComponent,
    ShangoComponent,
    BandComponent,
    StudioComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'real-maravilloso';
}
