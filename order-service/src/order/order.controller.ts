import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller()
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @MessagePattern({ cmd: 'CREATE_ORDER' })
  createOrder(dto: CreateOrderDto) {
    return this.orderService.create(dto);
  }

  @MessagePattern({ cmd: 'GET_ALL_ORDERS' })
  getAllOrders() {
    return this.orderService.findAll();
  }

  @MessagePattern({ cmd: 'GET_ORDER_BY_ID' })
  getOrderById(data: { id: string }) {
    return this.orderService.findOne(data.id);
  }

  @MessagePattern({ cmd: 'UPDATE_ORDER' })
  updateOrder(data: { id: string; updateDto: UpdateOrderDto }) {
    return this.orderService.update(data.id, data.updateDto);
  }

  @MessagePattern({ cmd: 'DELETE_ORDER' })
  deleteOrder(data: { id: string }) {
    return this.orderService.remove(data.id);
  }
}
