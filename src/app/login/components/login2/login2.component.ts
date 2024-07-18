import { Component, OnInit } from "@angular/core";
import { NormalService } from "../../services/normal.service";

@Component({
  selector: "app-login2",
  templateUrl: "./login2.component.html",
  styleUrls: ["./login2.component.scss"],
})
export class Login2Component implements OnInit {
  constructor(private normalService: NormalService) {
    console.log("getService desde login2", this.normalService.getData());
    this.normalService.setData([11, 12, 13, 14, 15]);
    console.log(
      "getService despues de el set desde login2",
      this.normalService.getData()
    );
  }

  ngOnInit(): void {}
}
