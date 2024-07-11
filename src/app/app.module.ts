import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ComponentComponent } from "./component/component.component";
import { Component2Component } from "./component2/component2.component";
import { FormsModule } from "@angular/forms";
import { Componet3Component } from './componet3/componet3.component';

@NgModule({
  declarations: [AppComponent, ComponentComponent, Component2Component, Componet3Component],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
