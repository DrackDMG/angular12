import { Component } from "@angular/core";
import { BehaviorSubject, of, Subscription, Observable } from "rxjs";
import { delay, filter, map } from "rxjs/operators";

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
  video: number = 1;

  ticktok = new BehaviorSubject(this.video);

  youtube: Observable<number[]> = of([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  personA: Subscription;

  constructor() {
    this.personA = this.ticktok
      .pipe(filter((a) => a % 2 === 0))
      .subscribe((item) => console.log("perosna a", item));

    this.ticktok.pipe(delay(4000)).subscribe((item) => {
      console.log("perosna b", item);
    });

    this.ticktok.subscribe((item) => console.log("perosna c", item));

    this.youtube
      .pipe(
        map((item) => {
          return item.map((a) => a * 2).filter((a) => a > 10);
        })
      )
      .subscribe((item) => console.log("youtube", item));
  }

  modifyTictok() {
    this.video++;
    this.ticktok.next(this.video);
  }

  suscribeorUnsuscribe() {
    if (this.personA.closed) {
      this.personA = this.ticktok
        .pipe(filter((a) => a % 2 === 0))
        .subscribe((item) => console.log("perosna a", item));
      console.log("Se ha suscripto");
    } else {
      this.personA.unsubscribe();
      console.log("Se ha desuscripto");
    }
  }
}
