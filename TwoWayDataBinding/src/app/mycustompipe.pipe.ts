import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product/IProduct';

@Pipe({
  name: 'mycustompipe'
})
export class MycustompipePipe implements PipeTransform {

  transform(value: IProduct[], args: string): IProduct[] {
    if(!args)
    {
      return value;
    }
    return value.filter(item=>item.Title.toLowerCase().indexOf(args.toLowerCase())>-1);
  }

}
