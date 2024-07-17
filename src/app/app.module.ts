import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { RouterModule, Routes } from "@angular/router";
import {
  NgbButtonLabel,
  NgbButtonsModule,
  NgbModule,
} from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";

// npx -p node@18 -p firebase-tools@13.13.3 firebase <command>
// https://face-angular-course.web.app/

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "pages",
    loadChildren: () =>
      import("./pages/pages.module").then((m) => m.PagesModule),
  },
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbButtonsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
