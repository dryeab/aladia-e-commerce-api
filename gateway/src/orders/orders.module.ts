import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { OrdersController } from './orders.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ORDER_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'order-service',
          port: 3002,
        },
      },
    ]),
  ],
  controllers: [OrdersController],
})
export class OrdersModule {}
