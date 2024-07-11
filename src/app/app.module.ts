import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ComponentComponent } from "./component/component.component";
import { Component2Component } from "./component2/component2.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, ComponentComponent, Component2Component],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
