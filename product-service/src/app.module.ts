import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(
      process.env.MONGO_URI || 'mongodb://localhost:27017/products',
    ),
    ProductModule,

    // CacheModule.register({
    //   store: redisStore,
    //   host: process.env.REDIS_HOST,
    //   port: parseInt(process.env.REDIS_PORT, 10),
    //   ttl: 60,
    // }),
  ],
})
export class AppModule {}
