import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "appExponent",
})
export class ExponentPipe implements PipeTransform {
  //transform(value: number, exponent?: number): number {
  transform(value: number, exponent: number): number {
    return Math.pow(value, isNaN(exponent) ? 1 : exponent);
  }
}
