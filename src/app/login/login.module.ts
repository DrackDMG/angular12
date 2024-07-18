import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login.component";
import { RouterModule, Routes } from "@angular/router";
import { NormalService } from "./services/normal.service";
import { Login1Component } from "./components/login1/login1.component";
import { Login2Component } from "./components/login2/login2.component";
import { UtilsService } from "./services/utils.service";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [LoginComponent, Login1Component, Login2Component],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [NormalService, UtilsService, UtilsService],
})
export class LoginModule {}
