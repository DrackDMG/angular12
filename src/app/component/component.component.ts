import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-component",
  templateUrl: "./component.component.html",
  styleUrls: ["./component.component.scss"],
})
export class ComponentComponent {
  a: number = 1;

  @Input("status")
  statusTest: string = "Activo";

  @Output() sendData = new EventEmitter();

  onClick(event: any) {
    console.log("Click", event);
    this.sendData.emit("Data from component");
  }

  constructor() {}
}
