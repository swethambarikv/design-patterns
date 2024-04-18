import { Component } from '@angular/core';
import { ShapeFactory } from '../service/design.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'factory-pattern',
  templateUrl: './factory-pattern.component.html',
  styleUrls: ['./factory-pattern.component.scss'],
})
export class FactoryPatternComponent {
  constructor(private shapeFactory: ShapeFactory) {}

  public getCustomProduct(productType: string) {
    const product: Product = this.shapeFactory.createProduct(productType);
    product.setColor('red');
    product.display();
  }
}
