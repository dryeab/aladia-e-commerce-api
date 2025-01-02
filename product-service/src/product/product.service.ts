import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async create(dto: CreateProductDto): Promise<Product> {
    const newProduct = new this.productModel(dto);
    return newProduct.save();
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async findOne(id: string): Promise<Product> {
    const product = await this.productModel.findById(id).exec();
    if (!product) throw new NotFoundException(`Product #${id} not found`);
    return product;
  }

  async update(id: string, updateDto: UpdateProductDto): Promise<Product> {
    const updatedProduct = await this.productModel.findByIdAndUpdate(
      id,
      updateDto,
      { new: true },
    );
    if (!updatedProduct)
      throw new NotFoundException(`Product #${id} not found`);
    return updatedProduct;
  }

  async remove(id: string): Promise<Product> {
    const deleted = await this.productModel.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException(`Product #${id} not found`);
    return deleted;
  }
}
