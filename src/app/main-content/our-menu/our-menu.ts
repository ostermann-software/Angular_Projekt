import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-menu',
  imports: [CommonModule],
  templateUrl: './our-menu.html',
  styleUrl: './our-menu.scss'
})
export class OurMenu {
  menuItems = [
    {
      image: 'assets/img/r1.png',
      name: 'Tonkasu Ramen',
      prices: [
        { type: 'CHICKEN', price: '11.95€' },
        { type: 'BEEF', price: '12.95€' },
        { type: 'SHRIMP', price: '13.95€' }
      ],
      side: 'left'
    },
    {
      image: 'assets/img/r2.png',
      name: 'Spicy Miso Ramen',
      prices: [
        { type: 'CHICKEN', price: '11.95€' },
        { type: 'BEEF', price: '12.95€' },
        { type: 'SHRIMP', price: '13.95€' }
      ],
      side: 'right'
    },
    {
      image: 'assets/img/r3.png',
      name: 'Shio Ramen',
      prices: [
        { type: 'CHICKEN', price: '11.95€' },
        { type: 'BEEF', price: '12.95€' },
        { type: 'SHRIMP', price: '13.95€' }
      ],
      side: 'left'
    }
  ];
}
