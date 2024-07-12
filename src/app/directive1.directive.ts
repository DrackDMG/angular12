import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from "@angular/core";

@Directive({
  selector: "[appDirective1]",
})
export class Directive1Directive {
  @Input() colorDirective: string = "blue";
  @Output() colorDirective2 = new EventEmitter<any>();

  @HostListener("window:click") onClick() {
    this.changeBgColor(this.colorDirective);
  }
  @HostListener("mouseleave") onClick1() {
    this.colorDirective2.emit("Data from directive");
    this.changeBgColor("white");
  }
  @HostListener("mouseenter") onClick2() {
    this.changeBgColor("red");
  }

  constructor(private element: ElementRef) {
    this.changeBgColor("red");
    element.nativeElement.style.color = "white";
    element.nativeElement.style.padding = "10px";
    element.nativeElement.style.border = "5px solid black";
  }

  changeBgColor(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}
