import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  height!: number;
  weight!: number;
  bmi: number | null = null;

  constructor() {}

  calculateBMI() {
    if (this.height && this.weight) {
      this.bmi = this.weight / (this.height * this.height);
    } else {
      this.bmi = null;
    }
  }
}
