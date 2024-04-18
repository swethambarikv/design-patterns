export interface Product {
  name: string;
  setColor(color: string): void;
  display(): void;
}

export class TShirt implements Product {
  name = 'T-Shirt';
  color: string | undefined;

  setColor(color: string) {
    this.color = color;
  }

  display() {
    alert(`Product: ${this.name}, Color: ${this.color}`);
  }
}

export class Mug implements Product {
  name = 'Mug';
  color: string | undefined;

  public setColor(color: string) {
    this.color = color;
  }

  public display() {
    alert(`Product: ${this.name}, Color: ${this.color}`);
  }
}
