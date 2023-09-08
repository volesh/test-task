import { Controller, Get, Query } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './schema/item-schema';
import { Order } from 'src/general/enums';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(
    @Query('name') name?: string,
    @Query('rate') rate?: string,
    @Query('minPrice') minPrice?: string,
    @Query('maxPrice') maxPrice?: string,
    @Query('order') order?: Order,
  ): Promise<Item[]> {
    return this.itemsService.findAll(name, rate, order, minPrice, maxPrice);
  }

  // @Get('/generate')
  // generate() {
  //   return this.itemsService.createRandomItems();
  // }

  @Get('/update')
  update() {
    return this.itemsService.update();
  }
}
