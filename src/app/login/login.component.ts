import { Component, OnInit } from "@angular/core";
import { PublicationsService } from "./services/publications.service";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  publicatoins: any = null;

  name: string = "";

  fromReactive: FormGroup;

  constructor(
    private publicationsService: PublicationsService,
    private formBuilder: FormBuilder
  ) {
    this.fromReactive = this.formBuilder.group({
      name: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
      ],
      lastName: "",
    });
  }

  ngOnInit(): void {
    this.publicationsService.list().subscribe((data) => {
      console.log("data desde login -> ", data);
    });

    this.fromReactive.valueChanges.subscribe((value) => {
      console.log("value -> ", value);
    });
  }

  getValue(value: any) {
    return this.fromReactive.get(value);
  }

  onShowAll(): void {
    console.log("reactiveForms -> ", this.fromReactive.value);
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
