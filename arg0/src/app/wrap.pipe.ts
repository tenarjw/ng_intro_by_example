import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wrap'
})
export class WrapContentPipe implements PipeTransform {
  transform(text : string): string {
  	return '<div class="content">'+text+'</div>';
  }
}