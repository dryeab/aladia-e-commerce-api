import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Patch,
  Delete,
  Inject,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateProductDto } from './dto/create-product.dto';
import { firstValueFrom } from 'rxjs';

@Controller('products')
export class ProductsController {
  constructor(@Inject('PRODUCT_SERVICE') private productClient: ClientProxy) {}

  @Post()
  async create(@Body() dto: CreateProductDto) {
    return firstValueFrom(
      this.productClient.send({ cmd: 'CREATE_PRODUCT' }, dto),
    );
  }

  @Get()
  async findAll() {
    return firstValueFrom(
      this.productClient.send({ cmd: 'GET_ALL_PRODUCTS' }, {}),
    );
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return firstValueFrom(
      this.productClient.send({ cmd: 'GET_PRODUCT_BY_ID' }, { id }),
    );
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: Partial<CreateProductDto>,
  ) {
    return firstValueFrom(
      this.productClient.send({ cmd: 'UPDATE_PRODUCT' }, { id, updateDto }),
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return firstValueFrom(
      this.productClient.send({ cmd: 'DELETE_PRODUCT' }, { id }),
    );
  }
}
