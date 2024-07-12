import { Component } from "@angular/core";
import { of } from "rxjs";
import { filter, map } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "angular12";

  printData(event: any) {
    console.log("Data from app component", event);
  }
  printData2(event: any) {
    console.log("Data from app component", event);
  }

  ticktok = of([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  constructor() {
    this.ticktok
      .pipe(filter((v: any) => v[0] % 2 > 5))
      .subscribe((item) => console.log("perosna a", item));

    this.ticktok
      .pipe(
        map((a) => a.join("-")),
        map((a) => a + " - " + new Date())
      )
      .subscribe((item) => {
        console.log("perosna b", item);
      });

    this.ticktok.subscribe((item) => console.log("perosna c", item));
  }
}
