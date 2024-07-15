import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ComponentComponent } from "./component/component.component";
import { Component2Component } from "./component2/component2.component";
import { FormsModule } from "@angular/forms";
import { Componet3Component } from "./componet3/componet3.component";
import { Directive1Directive } from "./directive1.directive";
import { Directive2Directive } from "./directive2.directive";
import { HomeModule } from "./pages/home/home.module";
import { AdminModule } from "./pages/admin/admin.module";
import { BuyModule } from "./pages/buy/buy.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    Component2Component,
    Componet3Component,
    Directive1Directive,
    Directive2Directive,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HomeModule,
    AdminModule,
    BuyModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
