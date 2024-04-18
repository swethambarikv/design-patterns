import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FactoryPatternComponent } from './factory-pattern/factory-pattern.component';
import { BuilderPatternComponent } from './builder-pattern/builder-pattern.component';
import { DecoratorPatternComponent } from './decorator-pattern/decorator-pattern.component';
import { FacadePatternComponent } from './facade-pattern/facade-pattern.component';

@NgModule({
  declarations: [
    AppComponent,
    FactoryPatternComponent,
    BuilderPatternComponent,
    DecoratorPatternComponent,
    FacadePatternComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
