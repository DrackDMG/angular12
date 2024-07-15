import {
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";

@Directive({
  selector: "[appDirective2]",
})
export class Directive2Directive implements OnChanges {
  @Input() appDirective2: boolean = true;

  constructor(private temp: TemplateRef<any>, private cont: ViewContainerRef) {}

  ngOnChanges(changes: any) {
    console.log("changes", changes);
    this.setView(changes.appDirective2.currentValue);
  }

  setView(show: boolean) {
    if (show) {
      this.cont.createEmbeddedView(this.temp);
    } else {
      this.cont.clear();
    }
  }
}
