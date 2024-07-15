import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Admin1Component } from "./admin1/admin1.component";
import { Admin2Component } from "./admin2/admin2.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [Admin1Component, Admin2Component],
  imports: [CommonModule, SharedModule],
  exports: [Admin1Component, Admin2Component],
})
export class AdminModule {}
