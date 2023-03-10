import {Pipe, PipeTransform} from '@angular/core';
import {escapeRegex} from '@common/shared/utils/escape-regex';

@Pipe({
  name: 'highlightSearchText'
})
export class HighlightSearchTextPipe implements PipeTransform {

  transform(value: any, args: any): any {
    if (!args || typeof args !== 'string' ) {
      return value;
    }
    const re           = new RegExp(escapeRegex(args), 'gi'); // 'gi' for case insensitive and can use 'g' if you want the search to be case sensitive.
    const originalTerm = value.match(re) && value.match(re)[0];
    if (originalTerm) {
      return value.replace(re, '<b>' + originalTerm + '</b>');
    } else {
      return value;
    }
  }
}
