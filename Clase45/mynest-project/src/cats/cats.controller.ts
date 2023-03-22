import { Body, Controller, Get, Post } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catService: CatsService) {}

  @Get()
  async findAll() {
    return this.catService.getAll();
  }

  @Post()
  async createCat(@Body() cat: Cat) {
    this.catService.create(cat);
    return {
      Message: 'Success',
      item: cat,
    };
  }
}
