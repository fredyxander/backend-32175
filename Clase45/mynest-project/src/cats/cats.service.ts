import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  //creamos un arreglo de gatos
  private readonly cats: Cat[] = [];

  //metodo para crear gatos
  create(cat: Cat) {
    this.cats.push(cat);
  }

  //metodo para obtener los gatos
  getAll(): Cat[] {
    return this.cats;
  }
}
