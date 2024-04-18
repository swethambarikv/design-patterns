import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BuilderPatternComponent } from './builder-pattern/builder-pattern.component';
import { DecoratorPatternComponent } from './decorator-pattern/decorator-pattern.component';
import { FacadePatternComponent } from './facade-pattern/facade-pattern.component';
import { FactoryPatternComponent } from './factory-pattern/factory-pattern.component';

const routes: Routes = [
  {
    path: 'factory',
    component: FactoryPatternComponent,
  },
  {
    path: 'builder',
    component: BuilderPatternComponent,
  },
  {
    path: 'decorator',
    component: DecoratorPatternComponent,
  },
  {
    path: 'facade',
    component: FacadePatternComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
