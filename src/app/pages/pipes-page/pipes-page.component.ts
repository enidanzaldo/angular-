import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-pipes-page',
  imports: [UpperCasePipe, LowerCasePipe, JsonPipe,DatePipe, DecimalPipe, CurrencyPipe, PercentPipe],
  templateUrl: './pipes-page.component.html',
})
export class PipesPageComponent { 
  firstName = signal('john');
  lastName = signal('DOE');

  user = signal({
    id: 1,
    firstName: this.firstName(),
    lastName: this.lastName(),
    age: 35,
    email: 'john.doe@example.com',
  });

  currentDate = signal(new Date());
  birthDate = signal(new Date(1990, 6, 15));


  price = signal(1234.56);
  porcent = signal(0.256);










}
