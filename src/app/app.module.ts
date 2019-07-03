import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { PersonsComponent } from './persons/persons.component';
import { BindingComponent } from './binding/binding.component';
import { PipesDemoComponent } from './pipes/pipesdemo.component';
import { BracketsPipe } from './pipes/brackets.pipe';
import { SpacesPipe } from './pipes/spaces.pipe';
import { ProductsListComponent } from './icc/products-list.component';
import { ProductDetailsComponent } from './icc/product-details.component';
import { UseStackComponent } from './services/usestack.component';
import { StackComponent } from './services/stack.component';
import { RegisterFormsComponent } from './register-forms/register-forms.component';

@NgModule({
  declarations: [
    PipesDemoComponent,
    BracketsPipe,
    SpacesPipe,
    HelloComponent,
    PersonsComponent,
    ProductsListComponent,
    ProductDetailsComponent,
    UseStackComponent,
    StackComponent,
    RegisterFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  //Declaring a Service at module level
  //providers:[StackService]
  providers: [],
  bootstrap: [RegisterFormsComponent, StackComponent, UseStackComponent, HelloComponent, PersonsComponent,ProductsListComponent, PipesDemoComponent]

})
export class AppModule { }
