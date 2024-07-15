import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ComponentComponent } from "./component/component.component";
import { Component2Component } from "./component2/component2.component";
import { FormsModule } from "@angular/forms";
import { Componet3Component } from "./componet3/componet3.component";
import { Directive1Directive } from "./directive1.directive";
import { Directive2Directive } from "./directive2.directive";

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    Component2Component,
    Componet3Component,
    Directive1Directive,
    Directive2Directive,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
