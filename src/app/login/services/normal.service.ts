import { Injectable } from "@angular/core";

@Injectable()
export class NormalService {
  private data = [1, 2, 3, 4, 5];

  constructor() {}

  public getData(): number[] {
    return this.data;
  }

  public setData(data: number[]): void {
    this.data = data;
  }
}
