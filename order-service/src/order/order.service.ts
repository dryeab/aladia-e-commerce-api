import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './schemas/order.schema';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}

  async create(dto: CreateOrderDto): Promise<Order> {
    const newOrder = new this.orderModel(dto);
    return newOrder.save();
  }

  async findAll(): Promise<Order[]> {
    return this.orderModel.find().exec();
  }

  async findOne(id: string): Promise<Order> {
    const order = await this.orderModel.findById(id).exec();
    if (!order) throw new NotFoundException(`Order #${id} not found`);
    return order;
  }

  async update(id: string, updateDto: UpdateOrderDto): Promise<Order> {
    const updated = await this.orderModel.findByIdAndUpdate(id, updateDto, {
      new: true,
    });
    if (!updated) throw new NotFoundException(`Order #${id} not found`);
    return updated;
  }

  async remove(id: string): Promise<Order> {
    const deleted = await this.orderModel.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException(`Order #${id} not found`);
    return deleted;
  }
}
