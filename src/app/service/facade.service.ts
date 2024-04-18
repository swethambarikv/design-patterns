import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  id: number;
  name: string | undefined;
}

export interface Product {
  id: number;
  title: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class DataFacadeService {
  private usersSubject = new BehaviorSubject<User[]>([]);
  users$: Observable<User[]> = this.usersSubject.asObservable();

  private productsSubject = new BehaviorSubject<Product[]>([]);
  products$: Observable<Product[]> = this.productsSubject.asObservable();

  private userList: User[] = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
  ];

  private productsList: Product[] = [
    { id: 1, title: 'Product A', price: 10.99 },
    { id: 2, title: 'Product B', price: 25.5 },
  ];

  constructor() {
    this.usersSubject.next(this.userList);
    this.productsSubject.next(this.productsList);
  }

  public getUsers(): void {
    this.usersSubject.next(this.usersSubject.getValue());
  }

  public getProducts(): void {
    this.productsSubject.next(this.productsSubject.getValue());
  }
}
