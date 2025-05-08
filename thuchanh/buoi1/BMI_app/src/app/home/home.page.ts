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
  bmiCategory: string | null = null;
  bmiImage: string | null = 'https://file.hstatic.net/1000185761/file/chi-so-bmi_21bd7ab74df24f77bcc1101a701f4011.jpg';

  constructor() {}

  calculateBMI() {
    if (this.height && this.weight) {
      this.bmi = this.weight / (this.height * this.height);
      this.evaluateBMICategory();
    } else {
      this.bmi = null;
      this.bmiCategory = null;
    }
  }

  private evaluateBMICategory() {
    if (this.bmi !== null) {
      if (this.bmi < 18.5) {
        this.bmiCategory = 'Thiếu cân';
      } else if (this.bmi >= 18.5 && this.bmi < 24.9) {
        this.bmiCategory = 'Bình thường';
      } else if (this.bmi >= 25 && this.bmi < 29.9) {
        this.bmiCategory = 'Thừa cân';
      } else {
        this.bmiCategory = 'Béo phì';
      }
    }
  }
}
