import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class PublicationsService {
  urlBase = environment.app.urlBase;

  constructor(private http: HttpClient) {}

  public list(): Observable<any> {
    return this.http.get(`${this.urlBase}/publications.json`);
  }

  public create(data: any): Observable<any> {
    return this.http.post(`${this.urlBase}/publications.json`, data);
  }

  public update(id: string, data: any): Observable<any> {
    return this.http.put(`${this.urlBase}/publications/${id}.json`, data);
  }

  public patch(id: string, data: any): Observable<any> {
    return this.http.patch(`${this.urlBase}/publications/${id}.json`, data);
  }

  public delete(id: string): Observable<any> {
    return this.http.delete(`${this.urlBase}/publications/${id}.json`);
  }
}
