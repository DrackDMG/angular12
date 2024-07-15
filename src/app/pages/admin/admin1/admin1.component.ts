import { Component, OnInit } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Component({
  selector: "app-admin1",
  templateUrl: "./admin1.component.html",
  styleUrls: ["./admin1.component.scss"],
})
export class Admin1Component implements OnInit {
  date: Date = new Date();
  auxJson = { name: "Juan", age: 20 };
  auxObserver$ = new BehaviorSubject<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  constructor() {
    setInterval(() => {
      this.date = new Date();
    }, 1000);
  }

  ngOnInit(): void {}

  onAdd() {
    this.auxObserver$.next([
      ...this.auxObserver$.value,
      this.auxObserver$.value.length + 1,
    ]);
  }
}
