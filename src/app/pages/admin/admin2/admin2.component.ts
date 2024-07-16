import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-admin2",
  templateUrl: "./admin2.component.html",
  styleUrls: ["./admin2.component.scss"],
})
export class Admin2Component implements OnInit {
  name = "John";
  name2 = 0;
  constructor() {}

  ngOnInit(): void {}

  /**
   * @param name
   * @param lastName
   * @returns
   */
  public testParams(name?: string, lastName?: string): string {
    const nameaux = "John";
    const lastNameaux = "Doe";
    console.log("name", name ?? nameaux, "lastName", lastName ?? lastNameaux);
    return `Hello ${name} ${lastName}`;
  }
}
