import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'dateFormatPipe' })

export class dateFormatPipe implements PipeTransform {
  transform(value:any,inputFormatOfDate:any): any {
    const inputDateFormat = moment(value);
    const dateString = inputDateFormat.format(inputFormatOfDate);
    return dateString;
            
  }
}


@Pipe({name:'dateDifferencePipe'})

export class dateDifferencePipe implements PipeTransform {
  transform(value: any, inputDate: any): any {

    const currentDate = moment(value);
    const date2 = moment(inputDate);
    const formattedCurrentDate=currentDate.format('YYYY-MM-DD');
    const differenceInDates = date2.diff(formattedCurrentDate, 'days');
    if(differenceInDates > 0)
    return differenceInDates+"  "+"Days from now";
    else
    return Math.abs(differenceInDates)+"  "+"Days ago";

  }
}

