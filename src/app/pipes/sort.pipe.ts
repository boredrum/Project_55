import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(users: any[]): any[] {
    users.sort(function(a: any,b: any){
      if (a.name < b.name){
        return -1
      }else if (a.name > b.name){
        return 1
      }else{
        return 0
      }
    });
    return users;
  }

}
