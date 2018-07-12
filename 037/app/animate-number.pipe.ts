import { Pipe, PipeTransform, ChangeDetectorRef } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { take } from 'rxjs/operators';
// zob. https://angular.io/guide/rx-library

// naive implementation assumes small number increments
@Pipe({
  name: 'animateNumber',
  pure: false
})
export class AnimateNumberPipe implements PipeTransform {
  private currentNumber: number = null; // intermediary number
  private targetNumber: number = null;

  transform(targetNumber: number): string {
    if (targetNumber !== this.targetNumber) {
      this.currentNumber = this.targetNumber || targetNumber;

      this.targetNumber = targetNumber;

      const difference = this.targetNumber - this.currentNumber

      const msecCounter = interval(100).pipe( take(difference) );
      msecCounter.subscribe(n => {
          this.currentNumber++;
        });
    }
    return String(this.currentNumber);

  }
}
