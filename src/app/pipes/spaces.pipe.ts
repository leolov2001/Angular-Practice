import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spaces'
})
export class SpacesPipe implements PipeTransform {

  transform(value: string, specialChar: string = " ", times: number =1): any {
    var output: string ="";
    var middleWord: string ="";
    for (var i =0; i<times; i++){
        middleWord+=specialChar;
    }
    for(var char of value){
      output=output+char+middleWord;
    }
    
    return output;
  }

}
