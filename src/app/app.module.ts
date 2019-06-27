import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { PersonsComponent } from './persons/persons.component';
import { BindingComponent } from './binding/binding.component';

@NgModule({
  declarations: [
    BindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [BindingComponent]
})
export class AppModule { }
