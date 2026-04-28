import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navigation } from '../navigation/navigation';
import { Hero } from '../hero/hero';
import { Services } from '../services/services';
import { ServiceDetail } from '../service-detail/service-detail';
import { Contact } from '../contact/contact';
import { Footer } from '../footer/footer';

@Component({
    selector: 'app-landing',
    standalone: true,
    imports: [CommonModule, Navigation, Hero, Services, ServiceDetail, Contact, Footer],
    template: `
    <div class="min-h-screen bg-black-pearl text-pearl-bush">
      <app-navigation></app-navigation>
      <app-hero></app-hero>
      <app-services></app-services>
      <app-service-detail></app-service-detail>
      <app-contact></app-contact>
      <app-footer></app-footer>
    </div>
  `
})
export class Landing { }
