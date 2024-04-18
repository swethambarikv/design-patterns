import { Component, OnInit } from '@angular/core';
import { DataFacadeService, Product, User } from '../service/facade.service';

@Component({
  selector: 'facade-pattern',
  templateUrl: './facade-pattern.component.html',
  styleUrls: ['./facade-pattern.component.scss'],
})
export class FacadePatternComponent implements OnInit {
  users: User[] = [];
  products: Product[] = [];
  selectedUser: User | null = null;
  selectedProductId: number = 0;

  constructor(private dataFacade: DataFacadeService) {}

  ngOnInit() {
    this.dataFacade.getUsers();
    this.dataFacade.getProducts();
    this.dataFacade.users$.subscribe((users) => (this.users = users));
    this.dataFacade.products$.subscribe(
      (products) => (this.products = products)
    );
  }

  selectUser(users: any) {
    console.log('users check :',users)
    alert(users);
  }

  selectProduct(products: any) {
    alert(products);
  }
}
