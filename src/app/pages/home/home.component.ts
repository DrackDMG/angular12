import { NormalService } from "./../../login/services/normal.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(private normalService: NormalService) {
    console.log("getService desde home", this.normalService.getData());
  }

  ngOnInit(): void {}
}
