import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-componet3",
  templateUrl: "./componet3.component.html",
  styleUrls: ["./componet3.component.scss"],
})
export class Componet3Component {
  ngifPreueba: boolean = true;
  color: string = "red";

  alumons = [
    { id: 1, name: "Juan", age: 20 },
    { id: 2, name: "Pedro", age: 30 },
    { id: 3, name: "Maria", age: 40 },
  ];
  @Input() name: string = "123";

  constructor() {}

  addAlumon() {
    this.alumons.push({
      id: this.alumons.length + 1,
      name: "Nuevo",
      age: 20,
    });
  }
  borrarAlumno(id: number) {
    this.alumons = this.alumons.filter((alumon) => alumon.id !== id);
  }
}
