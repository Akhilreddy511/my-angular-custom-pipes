import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inrToUsd'
})
export class InrToUsdPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(args)
    console.log(value)
    return value * args;
  }

}