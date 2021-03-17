import {Pipe, PipeTransform} from '@angular/core'
@Pipe({
  name: 'likeConverter'
})
export class LikeModulePipe implements PipeTransform {
  // I dont think that I will use exactly this Custom pipe in my project but I created this pipe just to make the
  // likes to seem like they are increasing when u tap once and decreasing when u tap twice
  transform(value: number) {
    value = (value+1) % 2;
    return value;
  }
}
