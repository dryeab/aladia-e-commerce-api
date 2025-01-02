import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller()
export class ProductController {
  constructor(private productService: ProductService) {}

  @MessagePattern({ cmd: 'CREATE_PRODUCT' })
  async createProduct(dto: CreateProductDto) {
    return this.productService.create(dto);
  }

  @MessagePattern({ cmd: 'GET_ALL_PRODUCTS' })
  async getAllProducts() {
    return this.productService.findAll();
  }

  @MessagePattern({ cmd: 'GET_PRODUCT_BY_ID' })
  async getProductById(payload: { id: string }) {
    return this.productService.findOne(payload.id);
  }

  @MessagePattern({ cmd: 'UPDATE_PRODUCT' })
  async updateProduct(payload: { id: string; updateDto: UpdateProductDto }) {
    return this.productService.update(payload.id, payload.updateDto);
  }

  @MessagePattern({ cmd: 'DELETE_PRODUCT' })
  async deleteProduct(payload: { id: string }) {
    return this.productService.remove(payload.id);
  }
}
