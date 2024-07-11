import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-component2",
  templateUrl: "./component2.component.html",
  styleUrls: ["./component2.component.scss"],
})
export class Component2Component {
  title: string = "Componente 2";
  var1: number = 1;
  var2: number = 2;
  result: number = 0;

  @Input() name: string = "";
  @Input() lastName: string = "";

  @Output() showData2 = new EventEmitter();

  showDataE(event: any) {
    this.showData2.emit("General Data" + this.name + " " + this.lastName);
    this.title = "Componente 2 - " + this.name + " " + this.lastName;
    this.result = parseInt(this.var1) + this.var2;
  }

  constructor() {}
}
