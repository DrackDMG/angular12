import {
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
  implements OnInit, OnChanges, DoCheck, OnDestroy {
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
  ngOnDestroy(): void {
    console.log("ngOnDestroy inicio");
  }
}
