import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'datePipe'
})
export class DatePipesPipe implements PipeTransform {

  constructor(
    private datePipe: DatePipe,
  ) {}
  transform(value) {
    return this.datePipe.transform(value, 'yyyy-MM-dd');;
  }

}
