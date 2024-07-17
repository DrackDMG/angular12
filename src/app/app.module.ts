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
import { View1Component } from "./view1/view1.component";
import { View2Component } from "./view2/view2.component";
import { View1sub1Component } from "./view1/view1sub1/view1sub1.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "view1",
    pathMatch: "full",
  },
  {
    path: "view1",
    component: View1Component,
    children: [
      {
        path: "",
        redirectTo: "view1sub1",
        pathMatch: "full",
      },
      {
        path: "view1sub1",
        component: View1sub1Component,
      },
    ],
  },
  {
    path: "view2/:id/sub/:id2",
    component: View2Component,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    Component2Component,
    Componet3Component,
    Directive1Directive,
    Directive2Directive,
    View1Component,
    View2Component,
    View1sub1Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HomeModule,
    AdminModule,
    BuyModule,
    SharedModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
