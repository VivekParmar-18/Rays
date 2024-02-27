import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(array: any[], sortKey: string, reverse: boolean): any[] {
    if (!Array.isArray(array) || !sortKey) {
      return array;
    }

    const sortedArray = array.sort((a, b) => {
      const x = a[sortKey];
      const y = b[sortKey];
      return (x < y ? -1 : 1) * (reverse ? 1 : -1);
    });

    return sortedArray;
  }
}
