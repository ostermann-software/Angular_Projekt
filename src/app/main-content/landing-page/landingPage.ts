import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-landingPage',
  standalone: true,
  imports: [Navbar],
  template: /*html*/`
  <section>
    <app-navbar></app-navbar>
    <h1>SAKURA RAMEN</h1>
    <h2>BEST RAMEN IN TOWN</h2>
  </section>
  `,
  styleUrls: ['./landingPage.scss'],
})
export class LandingPageComponent { }


