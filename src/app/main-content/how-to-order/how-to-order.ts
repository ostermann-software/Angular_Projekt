import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-how-to-order',
  imports: [CommonModule],
  templateUrl: './how-to-order.html',
  styleUrl: './how-to-order.scss'
})
export class HowToOrder {
  steps = [
    { image: 'assets/img/bowl_icon.jpg', title: 'Pick Your Noodle' },
    { image: 'assets/img/broth_icon.png', title: 'Pick Your Broth' },
    { image: 'assets/img/eggs_icon.jpg', title: 'Add Your Toppics' }
  ];
}
