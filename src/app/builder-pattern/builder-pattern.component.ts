import { Component } from '@angular/core';
import { PizzaBuilder } from '../model/pizza.model';

@Component({
  selector: 'builder-pattern',
  templateUrl: './builder-pattern.component.html',
  styleUrls: ['./builder-pattern.component.scss'],
})
export class BuilderPatternComponent {
  public orderPizza() {
    const pizza = new PizzaBuilder('Large', 'Thin Crust')
      .addCheese()
      .addTopping('Pepperoni')
      .addTopping('Mushrooms')
      .build();

    console.log(pizza);
  }
}
