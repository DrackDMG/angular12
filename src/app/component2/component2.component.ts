import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-component2",
  templateUrl: "./component2.component.html",
  styleUrls: ["./component2.component.scss"],
})
export class Component2Component {
  @Input() name: string = "";
  @Input() lastName: string = "";

  @Output() showData2 = new EventEmitter();

  showDataE(event: any) {
    this.showData2.emit("General Data" + this.name + " " + this.lastName);
  }

  constructor() {}
}
