import { IsArray, IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreateOrderDto {
  @IsArray()
  @IsNotEmpty()
  productIds: string[];

  @IsNumber()
  @Min(1)
  totalAmount: number;
}
