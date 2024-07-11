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
export class Componet3Component
  implements
    OnInit,
    OnChanges,
    DoCheck,
    OnDestroy,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked {
  ngifPreueba: boolean = true;
  color: string = "red";

  alumons = [
    { id: 1, name: "Juan", age: 20 },
    { id: 2, name: "Pedro", age: 30 },
    { id: 3, name: "Maria", age: 40 },
  ];
  @Input() name: string = "123";

  constructor() {
    console.log("Constructor inicio");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges inicio", changes);
  }
  ngOnInit(): void {
    console.log("ngOnInit inicio");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck inicio");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit inicio");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked inicio");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit inicio");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked inicio");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy inicio");
  }

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
