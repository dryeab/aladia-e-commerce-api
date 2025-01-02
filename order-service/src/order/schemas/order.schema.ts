// order-service/src/order/schemas/order.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Types } from 'mongoose';

@Schema()
export class Order extends Document {
  @Prop({ type: [{ type: Types.ObjectId }] }) // array of product IDs
  productIds: string[];

  @Prop({ required: true })
  totalAmount: number;

  @Prop({ default: 'pending' })
  status: string; // e.g. 'pending', 'completed'

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
