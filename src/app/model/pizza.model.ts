export class Pizza {
  size: string;
  crust: string;
  cheese: boolean;
  toppings: string[];

  constructor(builder: PizzaBuilder) {
    this.size = builder.size;
    this.crust = builder.crust;
    this.cheese = builder.cheese;
    this.toppings = builder.toppings;
  }
}

export class PizzaBuilder {
  size: string;
  crust: string;
  cheese: boolean;
  toppings: string[] = [];

  constructor(size: string, crust: string) {
    this.size = size;
    this.crust = crust;
    this.cheese = false;
  }

  public addCheese() {
    this.cheese = true;
    return this;
  }

  public addTopping(topping: string) {
    this.toppings.push(topping);
    return this;
  }

  public build() {
    return new Pizza(this);
  }
}
