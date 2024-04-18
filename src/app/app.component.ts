import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'design-patterns';
  constructor(private router: Router) {}

  navigateToFactoryPattern() {
    this.router.navigate(['/factory']);
  }
  navigateToDecoratorPattern() {
    this.router.navigate(['/decorator']);
  }
  navigateToBuilderPattern() {
    this.router.navigate(['/builder']);
  }
  navigateToFacadePattern() {
    this.router.navigate(['/facade']);
  }
}
