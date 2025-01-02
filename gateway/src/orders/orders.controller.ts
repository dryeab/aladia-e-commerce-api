import {
  Controller,
  Get,
  Post,
  Param,
  Patch,
  Delete,
  Body,
  Inject,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(
    @Inject('ORDER_SERVICE') private readonly orderClient: ClientProxy,
  ) {}

  @Post()
  async create(@Body() orderData: CreateOrderDto) {
    // e.g. pass productIds, totalAmount
    return firstValueFrom(
      this.orderClient.send({ cmd: 'CREATE_ORDER' }, orderData),
    );
  }

  @Get()
  async findAll() {
    return firstValueFrom(this.orderClient.send({ cmd: 'GET_ALL_ORDERS' }, {}));
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return firstValueFrom(
      this.orderClient.send({ cmd: 'GET_ORDER_BY_ID' }, { id }),
    );
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateData: Partial<CreateOrderDto>,
  ) {
    return firstValueFrom(
      this.orderClient.send(
        { cmd: 'UPDATE_ORDER' },
        { id, updateDto: updateData },
      ),
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return firstValueFrom(
      this.orderClient.send({ cmd: 'DELETE_ORDER' }, { id }),
    );
  }
}
