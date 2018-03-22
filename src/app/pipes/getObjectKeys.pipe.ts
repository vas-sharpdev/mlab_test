import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'glpObjectKeys', pure: false})
export class GetObjectKeys implements PipeTransform {
  public transform(value: any, args: any[] = null): any {
    return Object.keys(value);
  }
}
