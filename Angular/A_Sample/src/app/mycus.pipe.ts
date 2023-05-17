import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mycus'
})
export class MycusPipe implements PipeTransform {

  transform(value: string,arg:boolean=false): unknown {
    return console.log('value',value);
  }

}
