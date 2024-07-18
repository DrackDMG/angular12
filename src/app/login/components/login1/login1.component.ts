import { UtilsService } from "./../../services/utils.service";
import { SingletonService } from "./../../services/singleton.service";
import { Component, OnInit } from "@angular/core";
import { NormalService } from "../../services/normal.service";

@Component({
  selector: "app-login1",
  templateUrl: "./login1.component.html",
  styleUrls: ["./login1.component.scss"],
})
export class Login1Component implements OnInit {
  constructor(
    private normalService: NormalService,
    private singletonService: SingletonService,
    private utilsService: UtilsService
  ) {
    console.log("getService desde login1", this.normalService.getData());
    this.normalService.setData([6, 7, 8, 9, 10]);
    console.log(
      "getService despues de el set desde login1",
      this.normalService.getData()
    );
    console.log(
      "getMessage desde login1 -> ",
      this.singletonService.getMessage()
    );
  }

  ngOnInit(): void {}

  setData(): void {
    let aux = this.utilsService.getData();
    this.utilsService.setData(aux + 1);
    console.log("setData desde login1 -> ", this.utilsService.getData());
  }
}
