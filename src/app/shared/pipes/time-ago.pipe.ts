import { Pipe, PipeTransform } from '@angular/core';
import { formatDistanceToNow } from 'date-fns';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(date: Date): string {
    if (date) {
      return formatDistanceToNow(date);
    }
    return '';
  }

}
