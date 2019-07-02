import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { PersonsComponent } from './persons/persons.component';
import { BindingComponent } from './binding/binding.component';
import { PipesDemoComponent } from './pipes/pipesdemo.component';
import { BracketsPipe } from './pipes/brackets.pipe';
import { SpacesPipe } from './pipes/spaces.pipe';

@NgModule({
  declarations: [
    PipesDemoComponent,
    BracketsPipe,
    SpacesPipe,
    HelloComponent,
    PersonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [PipesDemoComponent, HelloComponent, PersonsComponent]
})
export class AppModule { }
