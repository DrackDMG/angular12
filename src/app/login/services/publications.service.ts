import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class PublicationsService {
  constructor(private http: HttpClient) {}

  public list(): Observable<any> {
    return this.http.get(
      "https://face-angular-course-default-rtdb.firebaseio.com/publications.json"
    );
  }

  public create(data: any): Observable<any> {
    return this.http.post(
      "https://face-angular-course-default-rtdb.firebaseio.com/publications.json",
      data
    );
  }

  public update(id: string, data: any): Observable<any> {
    return this.http.put(
      `https://face-angular-course-default-rtdb.firebaseio.com/publications/${id}.json`,
      data
    );
  }

  public patch(id: string, data: any): Observable<any> {
    return this.http.patch(
      `https://face-angular-course-default-rtdb.firebaseio.com/publications/${id}.json`,
      data
    );
  }

  public delete(id: string): Observable<any> {
    return this.http.delete(
      `https://face-angular-course-default-rtdb.firebaseio.com/publications/${id}.json`
    );
  }
}
