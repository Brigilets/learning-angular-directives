import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  numbers = [1, 2, 3, 4, 5];
  // oddNumbers = this.numbers.filter((num) => num % 2 !== 0);
  // evenNumbers = this.numbers.filter((num) => num % 2 === 0);
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  onlyOdd = false;
  numberType: string = 'odd' || 'even';

  value = 15;

  toggleNumberType() {
    this.onlyOdd = !this.onlyOdd;
    this.numberType = this.onlyOdd ? 'even' : 'odd';
  }
}
