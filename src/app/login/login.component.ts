import { Component, OnInit } from "@angular/core";
import { PublicationsService } from "./services/publications.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  publicatoins: any = null;

  constructor(private publicationsService: PublicationsService) {}

  ngOnInit(): void {
    this.publicationsService.list().subscribe((data) => {
      console.log("data desde login -> ", data);
    });
  }

  onSubmit(formtemplate: any) {
    console.log("formtemplate -> ", formtemplate);
  }

  create(): void {
    this.publicationsService
      .create({
        date: "2020-01-01",
        description: "Desde Postman",
        idUser: 2,
        imageURL: "https://firebase/img.jpg",
        userPhotoURL: "https://firebase/user1.jpg",
      })
      .subscribe((data) => {
        console.log("data desde login -> ", data);
      });
  }

  update(): void {
    this.publicationsService
      .update("p002", {
        date: "2020-01-01",
        description: "Update desde la app",
        idUser: 2,
        imageURL: "https://firebase/img.jpg",
        userPhotoURL: "https://firebase/user1.jpg",
      })
      .subscribe((data) => {
        console.log("data desde login -> ", data);
      });
  }

  delete(): void {
    this.publicationsService.delete("p002").subscribe((data) => {
      console.log("data desde login -> ", data);
    });
  }

  get(): void {
    this.publicationsService.list().subscribe((data) => {
      this.publicatoins = data;
      console.log("data desde login -> ", data);
    });
  }
}
