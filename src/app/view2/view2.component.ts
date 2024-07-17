import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-view2",
  templateUrl: "./view2.component.html",
  styleUrls: ["./view2.component.scss"],
})
export class View2Component implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((params) => {
    //   console.log(params);
    // });

    console.log(this.activatedRoute.snapshot.params);

    // this.activatedRoute.queryParams.subscribe((params) => {
    //   console.log(params);
    // });

    console.log(this.activatedRoute.snapshot.queryParams);
  }
}
