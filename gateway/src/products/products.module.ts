import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ProductsController } from './products.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PRODUCT_SERVICE',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 3001,
        },
      },
    ]),
  ],
  controllers: [ProductsController],
})
export class ProductsModule {}
