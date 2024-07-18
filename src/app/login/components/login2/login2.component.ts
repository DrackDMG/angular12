import { SingletonService } from "./../../services/singleton.service";
import { Component, OnInit } from "@angular/core";
import { NormalService } from "../../services/normal.service";
import { UtilsService } from "../../services/utils.service";

@Component({
  selector: "app-login2",
  templateUrl: "./login2.component.html",
  styleUrls: ["./login2.component.scss"],
})
export class Login2Component implements OnInit {
  constructor(
    private normalService: NormalService,
    private singletonService: SingletonService,
    private utilsService: UtilsService
  ) {
    console.log("getService desde login2", this.normalService.getData());
    this.normalService.setData([11, 12, 13, 14, 15]);
    console.log(
      "getService despues de el set desde login2",
      this.normalService.getData()
    );
  }

  ngOnInit(): void {
    this.utilsService.currentData().subscribe((data) => {
      console.log("data desde login2 -> ", data);
    });
  }

  setData(): void {
    this.singletonService.setMessage("Data from login2");
    console.log(
      "setMessage desde login2 -> ",
      this.singletonService.getMessage()
    );
  }
}
