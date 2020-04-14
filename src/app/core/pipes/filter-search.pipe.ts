import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(arr:any[], searchValue:any) { 
        if (!searchValue.value) return arr;
        return arr.filter(value => { 
          return value[searchValue.type].toLowerCase().indexOf(searchValue.value.toLowerCase()) > -1; 
        }); 
      }
}
