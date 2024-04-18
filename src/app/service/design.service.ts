import { Injectable } from '@angular/core';
import { Product, TShirt, Mug } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ShapeFactory {
  constructor() {}

  public createProduct(productType: string): Product {
    switch (productType) {
      case 'tshirt':
        return new TShirt();
      case 'mug':
        return new Mug();
      default:
        throw new Error('Invalid product type');
    }
  }

  public logger(message: string) {
    console.log(message);
  }
}
