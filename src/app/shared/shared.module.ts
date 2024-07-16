import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoaderComponent } from "./loader/loader.component";
import { CardComponent } from "./card/card.component";
import { ExponentPipe } from "./exponent.pipe";

@NgModule({
  declarations: [LoaderComponent, CardComponent, ExponentPipe],
  imports: [CommonModule],
  exports: [LoaderComponent, CardComponent, ExponentPipe],
})
export class SharedModule {}
