import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { RouterModule, Routes } from "@angular/router";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSliderModule } from "@angular/material/slider";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import {
  NgbButtonLabel,
  NgbButtonsModule,
  NgbModule,
} from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { SingletonService } from "./login/services/singleton.service";

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
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbButtonsModule,
    FormsModule,

    MatSliderModule,
    MatProgressSpinnerModule,
  ],
  providers: [SingletonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
